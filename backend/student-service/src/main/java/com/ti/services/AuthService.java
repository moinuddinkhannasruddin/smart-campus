package com.ti.services;

import com.ti.exceptions.ExceptionResponse;
import com.ti.exceptions.PermissionException;
import com.ti.exceptions.ServiceException;
import com.ti.exceptions.UnauthorizedException;
import com.ti.models.dtos.common.UserDto;
import com.ti.utils.JsonUtil;
import jakarta.servlet.http.HttpServletRequest;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.util.List;

/**
 * @author Azam
 */
@Service
@RequiredArgsConstructor
@Getter
public class AuthService {

    @Value("${auth.service.url.validate-token}")
    private String validateTokenUrl;

    @Value("${security.jwt.header}")
    private String header;

    @Value("${security.jwt.prefix}")
    private String prefix;

    public String verifyJwt(HttpServletRequest request) {
        // 1. get the authentication header. Tokens are supposed to be passed in the
        // authentication header
        String header = request.getHeader((getHeader()));
        // 2. validate the header and check the prefix
        if (header == null || !header.startsWith(getPrefix())) {
            // throw new ApiException("Token expired. Please login again");
            throw new ServiceException("Header is missing or invalid token.");
        }

        // 3. Get the token
        String token = header.replace(getPrefix(), "");
        return token;
    }

    public UserDto validateToken(HttpServletRequest request, List<String> roles) {
        UserDto userDto = null;

        try {
            RestTemplate restTemplate = new RestTemplate();
            String token = verifyJwt(request);

            MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
            params.addAll("roles", roles);

            HttpHeaders headers = new HttpHeaders();
            headers.add("Authorization", "Bearer " + token);

            HttpEntity<MultiValueMap<String, String>> httpEntity = new HttpEntity<>(params, headers);
            userDto = restTemplate.postForObject(validateTokenUrl, httpEntity, UserDto.class);
        } catch (Exception ex) {
            if (ex instanceof HttpClientErrorException httpClientErrorException) {
                HttpStatusCode statusCode = httpClientErrorException.getStatusCode();
                String message = ex.getMessage().substring(6).replaceAll("^\"|\"$", "");
                ExceptionResponse exceptionResponse = (ExceptionResponse) JsonUtil.toObject(message, ExceptionResponse.class);
                if (statusCode.value() == 401) {
                    throw new UnauthorizedException(exceptionResponse.message());
                }

                if (statusCode.value() == 403) {
                    throw new PermissionException(exceptionResponse.message());
                }
            }

            throw new ServiceException(ex.getMessage(), "GE106");
        }
        return userDto;
    }
}
