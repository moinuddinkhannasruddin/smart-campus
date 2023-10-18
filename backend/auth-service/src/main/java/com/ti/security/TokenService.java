package com.ti.security;

import com.ti.exceptions.ApiException;
import com.ti.exceptions.PermissionException;
import com.ti.exceptions.ServiceException;
import com.ti.exceptions.UnauthorizedException;
import com.ti.exceptions.errors.UserErrors;
import com.ti.models.Role;
import com.ti.models.dtos.common.UserDto;
import com.ti.repositories.TokenLogRepository;
import com.ti.services.RoleService;
import com.ti.utils.ClassUtil;
import com.ti.utils.JsonUtil;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.http.HttpServletRequest;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Set;

/**
 * @author Azam
 */

@Service
@RequiredArgsConstructor
@Getter
public class TokenService {

    @Value("${security.jwt.authUrl}")
    private String authUrl;

    @Value("${security.jwt.header}")
    private String header;

    @Value("${security.jwt.prefix}")
    private String prefix;

    @Value("${security.jwt.secret}")
    private String secret;

    @Value("${security.jwt.expiration}")
    private Long expiration;

    private final TokenLogService tokenLogService;

    private final RoleService roleService;

    private final TokenLogRepository tokenLogRepository;

    public String generateJwt(Token token, String ip) {
        final Date createdDate = new Date();
        final Date expirationDate = new Date(createdDate.getTime() + expiration * 1000);
        final LocalDateTime expirationDate2 = LocalDateTime.now().plusSeconds(expiration);

        int tokenLogId = tokenLogService.createLoginLog(token.getSub().getId(), token.getSub().getEmail(), token.getSub().getUserTypes(), expirationDate2, ip);

        String jwt = Jwts.builder()
                .setSubject(JsonUtil.toString(token.getSub()))
                .setIssuedAt(createdDate)
                .setExpiration(expirationDate)
                .claim("tokenLogId", tokenLogId)
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();

        TokenLog tokenLog = tokenLogService.getTokenLogById(tokenLogId);
        tokenLog.setToken(jwt);
        tokenLogRepository.save(tokenLog);

        return jwt;
    }

    public Token verifyJwt(String token) {

        Claims claims = Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody();

        Token tokenBody = new Token();

        UserDto userDto = (UserDto) JsonUtil.toObject(claims.getSubject(), UserDto.class);

        tokenBody.setSub(userDto);

        tokenBody.setTokenLogId((int) claims.get("tokenLogId"));

        TokenLog tokenLog = tokenLogService.getTokenLogById(tokenBody.getTokenLogId());
        if (tokenLog.getIsValid() != 1) {
            throw new UnauthorizedException("Unauthorized");
        }

        return tokenBody;
    }

    public Token verifyJwt(HttpServletRequest request) {
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
        return verifyJwt(token);
    }

    public UserDto verifyAccess(HttpServletRequest request, List<String> roles) {
        Token token = this.verifyJwt(request);
        Set<Role> rolesByUserId = roleService.getRolesByUserId(token.getSub().getId());

        List<Role> permissions = rolesByUserId.stream().filter(p -> roles.contains(p.getType().toString())).toList();
        if (permissions.isEmpty() && !roles.isEmpty()) {
            throw new PermissionException(UserErrors.getErrorMessage(UserErrors.UE208) + roles);
        }
        return ClassUtil.convert(token.getSub(), UserDto.class);
    }

}
