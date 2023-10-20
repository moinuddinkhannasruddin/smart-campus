package com.ti.smartcampus.controllers;


import com.ti.smartcampus.exceptions.ApiException;
import com.ti.smartcampus.exceptions.DataNotFoundException;
import com.ti.smartcampus.exceptions.ServiceException;
import com.ti.smartcampus.exceptions.errors.GenericErrors;
import com.ti.smartcampus.exceptions.errors.UserErrors;
import com.ti.smartcampus.models.User;
import com.ti.smartcampus.models.constants.TokenLogPurpose;
import com.ti.smartcampus.models.dtos.common.CommonDto;
import com.ti.smartcampus.models.dtos.common.UserDto;
import com.ti.smartcampus.models.dtos.requests.ChangePasswordRequest;
import com.ti.smartcampus.models.dtos.requests.ForgotPasswordRequest;
import com.ti.smartcampus.models.dtos.requests.LoginRequest;
import com.ti.smartcampus.models.dtos.requests.VerifyOtpRequest;
import com.ti.smartcampus.models.dtos.responses.LoginResponse;
import com.ti.smartcampus.security.Token;
import com.ti.smartcampus.security.TokenLog;
import com.ti.smartcampus.security.TokenLogService;
import com.ti.smartcampus.security.TokenService;
import com.ti.smartcampus.services.AuthService;
import com.ti.smartcampus.services.LoggerService;
import com.ti.smartcampus.utils.ClassUtil;
import com.ti.smartcampus.utils.CommonUtil;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
            if (ex instanceof DataNotFoundException dataNotFoundException) {
                throw new DataNotFoundException(ex.getMessage(), dataNotFoundException.getErrorCode());
            }

            if (ex instanceof ServiceException serviceException) {
                throw new ServiceException(ex.getMessage(), serviceException.getErrorCode());
            }

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
            throw new ApiException(UserErrors.UE205, UserErrors.getErrorMessage(UserErrors.UE205));
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
        } catch (Exception ex) {
            throw new ApiException(ex.getMessage());
        }

        loginResponse = authService.tokenLoginResponse(request, userDto, loginResponse);

        return loginResponse;
    }

    @PostMapping("forgot-password")
    public CommonDto forgotPassword(HttpServletRequest request, @Valid @RequestBody ForgotPasswordRequest forgotPasswordRequest) {

        return authService.forgotPassword(request, forgotPasswordRequest);
    }

    @PostMapping("reset-password")
    public CommonDto resetPassword(HttpServletRequest request, @RequestParam String token, @RequestParam String password) {
        try {
            TokenLog tokenLog = tokenLogService.verifyTokenLogByToken(token, CommonUtil.getRemoteAddress(request));

            if (!tokenLog.getPurpose().equals(TokenLogPurpose.RESET)) {
                throw new ServiceException(GenericErrors.getErrorMessage(GenericErrors.GE102), GenericErrors.GE102);
            }

            authService.resetPassword(tokenLog.getUserId(), password);
            return new CommonDto(UserErrors.getErrorMessage(UserErrors.UE210));
        } catch (Exception ex) {
            if (ex instanceof ServiceException serviceException) {
                throw new ServiceException(serviceException.getErrorCode(), ex.getMessage());
            }

            if (ex instanceof DataNotFoundException dataNotFoundException) {
                throw new ServiceException(dataNotFoundException.getErrorCode(), ex.getMessage());
            }
            throw new ApiException(ex.getMessage());
        }
    }

    @PostMapping("change-password")
    public CommonDto changePassword(HttpServletRequest request, @Valid @RequestBody ChangePasswordRequest changePasswordRequest) {
        try {
            Token token = tokenService.verifyJwt(request);
            authService.changePassword(token.getSub().getId(), changePasswordRequest.getOldPassword(), changePasswordRequest.getNewPassword());

            return new CommonDto(UserErrors.getErrorMessage(UserErrors.UE211));
        } catch (Exception ex) {
            if (ex instanceof ServiceException serviceException) {
                throw new ServiceException(serviceException.getErrorCode(), ex.getMessage());
            }

            if (ex instanceof DataNotFoundException dataNotFoundException) {
                throw new DataNotFoundException(dataNotFoundException.getErrorCode(), ex.getMessage());
            }
            throw new ApiException(ex.getMessage());
        }
    }

//    @PostMapping("resend-otp")
//    public CommonDto resendOtp() {
//
//    }

//    @PostMapping("validate-token")
//    public UserDto validateToken(HttpServletRequest request, @RequestParam(required = false) String token, @RequestParam List<String> roles) {
//        return tokenService.verifyAccess(request, roles);
//    }

}
