package com.ti.services;

import com.ti.exceptions.ServiceException;
import com.ti.exceptions.errors.UserErrors;
import com.ti.models.User;
import com.ti.models.dtos.common.UserDto;
import com.ti.models.dtos.requests.LoginRequest;
import com.ti.models.dtos.responses.LoginResponse;
import com.ti.repositories.UserRepository;
import com.ti.security.Token;
import com.ti.security.TokenService;
import com.ti.utils.ClassUtil;
import com.ti.utils.CommonUtil;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * @author Azam
 */

@Service
@RequiredArgsConstructor
public class AuthService {

    private final LoggerService loggerService;
    private final UserRepository userRepository;
    private final TokenService tokenService;


    public UserDto authenticate(LoginRequest loginRequest) {
        User user = userRepository.findFirstByEmail(loginRequest.getUsername()).orElseThrow(() -> {
            loggerService.error(UserErrors.getErrorMessage(UserErrors.UE201), "authenticate", "");
            return new ServiceException(UserErrors.UE201);
        });

        if (!user.getIsActive().equals(1)) {
            loggerService.error(UserErrors.getErrorMessage(UserErrors.UE202), "authenticate", "");
            throw new ServiceException(UserErrors.UE202);
        }

        LocalDateTime lastLoginTime = user.getLastLogin();

        if (user.getLoginTry() != null && user.getLoginTry().isBefore(LocalDateTime.now().minusMinutes(15))) {
            user.setLoginAttempt(0);
        }

        if (user.getLoginAttempt() != null && user.getLoginAttempt() > 5) {
            loggerService.error(UserErrors.getErrorMessage(UserErrors.UE203), "authenticate", "");
            throw new ServiceException(UserErrors.UE203);
        }

        user.setLoginTry(LocalDateTime.now());
        user.setLoginAttempt(user.getLoginAttempt() + 1);
        user = userRepository.save(user);

        if (!user.isValidPassword(loginRequest.getPassword())) {
            loggerService.error(UserErrors.getErrorMessage(UserErrors.UE201), "authenticate", "");
            throw new ServiceException(UserErrors.UE201);
        }

        user.setLoginAttempt(0);
        user.setLastLogin(LocalDateTime.now());
        user = userRepository.save(user);

        UserDto userDto = ClassUtil.convert(user, UserDto.class);

        if (lastLoginTime != null) {
            user.setLastLogin(LocalDateTime.parse(lastLoginTime.format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss"))));
        }

        loggerService.info("Authenticate", "authenticate", "");
        return userDto;
    }

    public User getUserByEmail(String email) {
        User user = userRepository.findFirstByEmail(email).orElseThrow(() -> {
            loggerService.error(UserErrors.getErrorMessage(UserErrors.UE206), "getUserByEmail", "");
            return new ServiceException(UserErrors.UE206);
        });
        loggerService.info("Get User By Email", "getUserByEmail", "");
        return user;
    }

    public LoginResponse tokenLoginResponse(HttpServletRequest request, UserDto userDto, LoginResponse loginResponse) {
        Token tokenBody = new Token();
        tokenBody.setUserId(userDto.getUserId());
        tokenBody.setUserName(userDto.getName());
        tokenBody.setUserType(userDto.getUserType());

        String token = tokenService.generateJwt(tokenBody, CommonUtil.getRemoteAddress(request));

        loginResponse.setToken(token);
        loginResponse.setUser(userDto);

        return loginResponse;
    }
}
