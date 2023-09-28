package com.ti.controllers;

import com.ti.exceptions.ApiException;
import com.ti.exceptions.errors.UserErrors;
import com.ti.models.User;
import com.ti.models.dtos.common.CommonDto;
import com.ti.models.dtos.common.UserDto;
import com.ti.models.dtos.requests.ForgotPasswordRequest;
import com.ti.models.dtos.requests.LoginRequest;
import com.ti.models.dtos.requests.VerifyOtpRequest;
import com.ti.models.dtos.responses.LoginResponse;
import com.ti.security.Token;
import com.ti.security.TokenLogService;
import com.ti.security.TokenService;
import com.ti.services.AuthService;
import com.ti.services.LoggerService;
import com.ti.utils.ClassUtil;
import com.ti.utils.CommonUtil;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Azam
 */
@RestController
@RequestMapping("/v1/auth/")
@RequiredArgsConstructor
public class AuthController {


    private final LoggerService loggerService;
    private final AuthService authService;
    private final TokenService tokenService;
    private final TokenLogService tokenLogService;

    @PostMapping("login")
    public LoginResponse login(HttpServletRequest request, @Valid @RequestBody LoginRequest loginRequest) {

        UserDto user = new UserDto();

        try {
            user = authService.authenticate(loginRequest);
        } catch (Exception ex) {
            throw new ApiException(ex.getMessage());
        }

        LoginResponse loginResponse = new LoginResponse();

        if (user.getIs2FaActive().equals(1)) {
            //Use Apache Kafka Template to send otp
//            communicationService.sendOtp(user);
            loginResponse.setUser(user);

            loggerService.info("Login with 2FA", "login", "");

            return loginResponse;
        }

        loginResponse = authService.tokenLoginResponse(request, user, loginResponse);

        loggerService.info("Login with token", "login", "");

        return loginResponse;
    }

    @GetMapping("logout")
    public CommonDto logout(HttpServletRequest request) {
        Token token = tokenService.verifyJwt(request);
        try {
            tokenLogService.closeLoginLog(token.getTokenLogId());
            return new CommonDto(UserErrors.getErrorMessage(UserErrors.UE205));
        } catch (Exception ex) {
            throw new ApiException(ex.getMessage());
        }
    }

    @PostMapping("verify-otp")
    public LoginResponse verifyOtp(HttpServletRequest request, @RequestBody VerifyOtpRequest verifyOtpRequest) {

        String otp = verifyOtpRequest.getOtp();
        String email = verifyOtpRequest.getEmail();

        UserDto userDto = new UserDto();
        LoginResponse loginResponse = new LoginResponse();
        try {
            User user = authService.getUserByEmail(email);
            userDto = ClassUtil.convert(user, UserDto.class);
            //use apache kafka to send verification
//            communicationService.verifyCustomerOtp(userDto, otp);
        } catch (Exception ex){
            throw new ApiException(ex.getMessage());
        }

        loginResponse = authService.tokenLoginResponse(request, userDto, loginResponse);

        return loginResponse;
    }

//    @PostMapping("forgot-password")
//    public CommonDto forgotPassword(HttpServletRequest request, @Valid @RequestBody ForgotPasswordRequest forgotPasswordRequest) {
//        try {
//            User user = authService.getUserByEmail(forgotPasswordRequest.getEmail());
//
//        } catch (Exception ex) {
//            throw new ApiException(ex.getMessage());
//        }
//    }

}
