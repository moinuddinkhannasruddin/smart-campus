package com.ti.services;

import com.ti.exceptions.DataNotFoundException;
import com.ti.exceptions.ServiceException;
import com.ti.exceptions.errors.UserErrors;
import com.ti.models.User;
import com.ti.models.dtos.common.CommonDto;
import com.ti.models.dtos.common.UserDto;
import com.ti.models.dtos.requests.ForgotPasswordRequest;
import com.ti.models.dtos.requests.LoginRequest;
import com.ti.models.dtos.responses.LoginResponse;
import com.ti.repositories.UserRepository;
import com.ti.security.Token;
import com.ti.security.TokenLogService;
import com.ti.security.TokenService;
import com.ti.utils.ClassUtil;
import com.ti.utils.CommonUtil;
import com.ti.utils.JsonUtil;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

/**
 * @author Azam
 */

@Service
@RequiredArgsConstructor
public class AuthService {

    private final LoggerService loggerService;
    private final UserRepository userRepository;
    private final TokenService tokenService;
    private final TokenLogService tokenLogService;


    public UserDto authenticate(LoginRequest loginRequest) {
        User user = userRepository.findFirstByEmail(loginRequest.getUsername()).orElseThrow(() -> new DataNotFoundException(UserErrors.getErrorDetails(UserErrors.UE201), UserErrors.UE201));

        if (!user.getIsActive().equals(1)) {
            loggerService.error(UserErrors.getErrorMessage(UserErrors.UE202), "authenticate", "");
            throw new ServiceException(UserErrors.getErrorMessage(UserErrors.UE202), UserErrors.UE202);
        }

        LocalDateTime lastLoginTime = user.getLastLogin();

        if (user.getLoginTry() != null && user.getLoginTry().isBefore(LocalDateTime.now().minusMinutes(15))) {
            user.setLoginAttempt(0);
        }

        if (user.getLoginAttempt() != null && user.getLoginAttempt() > 5) {
            loggerService.error(UserErrors.getErrorMessage(UserErrors.UE203), "authenticate", "");
            throw new ServiceException(UserErrors.getErrorMessage(UserErrors.UE203), UserErrors.UE203);
        }

        user.setLoginTry(LocalDateTime.now());
        user.setLoginAttempt(user.getLoginAttempt() + 1);
        user = userRepository.save(user);

        if (!user.isValidPassword(loginRequest.getPassword())) {
            loggerService.error(UserErrors.getErrorMessage(UserErrors.UE201), "authenticate", "");
            throw new ServiceException(UserErrors.getErrorMessage(UserErrors.UE201), UserErrors.UE201);
        }

        user.setLoginAttempt(0);
        user.setLastLogin(LocalDateTime.now());
        user = userRepository.save(user);

        UserDto userDto = ClassUtil.convert(user, UserDto.class);

        if (lastLoginTime != null) {
            user.setLastLogin(lastLoginTime);
        }

        loggerService.info("Authenticate", "authenticate", "");
        return userDto;
    }

    public User getUserByEmail(String email) {
        User user = userRepository.findFirstByEmail(email).orElseThrow(() -> new DataNotFoundException(UserErrors.getErrorMessage(UserErrors.UE206), UserErrors.UE206));
        loggerService.info("Get User By Email", "getUserByEmail", "");
        return user;
    }

    public User getUserById(String userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new DataNotFoundException(UserErrors.getErrorMessage(UserErrors.UE207), UserErrors.UE207));
        loggerService.info("Get User By Id", "getUserById", "");
        return user;
    }

    public LoginResponse tokenLoginResponse(HttpServletRequest request, UserDto userDto, LoginResponse loginResponse) {
        Token tokenBody = new Token();
        tokenBody.setSub(userDto);

        String token = tokenService.generateJwt(tokenBody, CommonUtil.getRemoteAddress(request));

        loginResponse.setToken(token);
        loginResponse.setUser(userDto);
        loggerService.info("Token Login Response", "tokenLoginResponse", "");
        return loginResponse;
    }

    public CommonDto forgotPassword(HttpServletRequest request, ForgotPasswordRequest forgotPasswordRequest){
        User user = this.getUserByEmail(forgotPasswordRequest.getEmail());

        if(user.getIsActive().equals(0)){
            loggerService.info(UserErrors.getErrorMessage(UserErrors.UE202), "forgotPassword", "");
            throw new ServiceException(UserErrors.getErrorMessage(UserErrors.UE202), UserErrors.UE202);
        }

        String token = tokenLogService.createResetLog(user.getId(), user.getEmail(), user.getUserTypes(), CommonUtil.getRemoteAddress(request));

        //Send mail through communication service use apache kafka
//        communicationService.sendForgotPasswordMail(user, token);

        return new CommonDto(UserErrors.getErrorMessage(UserErrors.UE209));
    }


    public void resetPassword(String userId, String password) {
        User user = this.getUserById(userId);
        user.setHashPassword(password);
        userRepository.save(user);

        loggerService.info("Reset User Password", "resetUserPassword", "");
    }

    public void changePassword(String userId, String oldPassword, String newPassword) {
        User user = this.getUserById(userId);

        if(!user.isValidPassword(oldPassword)){

            loggerService.error(UserErrors.getErrorMessage(UserErrors.UE204), "changeUserPassword", "");
            throw new ServiceException(UserErrors.getErrorMessage(UserErrors.UE204), UserErrors.UE204);
        }

        user.setHashPassword(newPassword);
        userRepository.save(user);

        loggerService.info("Change Password", "changePassword", "");
    }
}
