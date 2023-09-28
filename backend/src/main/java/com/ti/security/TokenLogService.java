package com.ti.security;

import com.ti.exceptions.ServiceException;
import com.ti.exceptions.UnauthorizedException;
import com.ti.exceptions.errors.GenericErrors;
import com.ti.exceptions.errors.UserErrors;
import com.ti.models.constants.TokenLogPurpose;
import com.ti.models.constants.UserType;
import com.ti.repositories.TokenLogRepository;
import com.ti.utils.SecurityUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

/**
 * @author Azam
 */


@Service
@RequiredArgsConstructor
public class TokenLogService {

    @Value("${app.otp.attempt}")
    Integer maxOtpAttempt;

    private final TokenLogRepository tokenLogRepository;

    public int createLoginLog(String userId, String email, UserType userType, LocalDateTime expirationDate, String ip) {

        TokenLog tokenLog = new TokenLog();

        tokenLog.setUserId(userId + "");
        tokenLog.setUserType(userType);

        tokenLog.setPurpose(TokenLogPurpose.LOGIN);
        tokenLog.setEmail(email);
        tokenLog.setIp(ip);
        tokenLog.setToken("");
        tokenLog.setAttempt(1);
        tokenLog.setExpiredAt(expirationDate);
        tokenLog.setIsValid(1);
        tokenLog.setCreatedAt(LocalDateTime.now());
        tokenLog = tokenLogRepository.save(tokenLog);

        return tokenLog.getId();
    }

    public TokenLog getTokenLogById(int id) {

        Optional<TokenLog> tokenLog = tokenLogRepository.findById(id);

        if (tokenLog.isEmpty()) {
            throw new UnauthorizedException("Unauthorized");
        }

        return tokenLog.get();
    }

    public void closeLoginLog(Integer id) {

        TokenLog tokenLog = getTokenLogById(id);
        tokenLog.setExpiredAt(LocalDateTime.now());
        tokenLog.setIsValid(2);
        tokenLogRepository.save(tokenLog);
    }

    public String createResetLog(String userId, String email, UserType userType, String remoteAddress) {
        Optional<TokenLog> tokenLog = tokenLogRepository.findFirstByUserIdAndUserTypeAndPurposeAndIsValid(userId + "", userType, TokenLogPurpose.RESET, 1);

        if (tokenLog.isPresent()) {
            TokenLog tokenLog1 = tokenLog.get();
            if (LocalDateTime.now().isBefore(tokenLog1.getExpiredAt())) {
                throw new ServiceException(GenericErrors.GE101);
            }

            tokenLog1.setIsValid(0);
            tokenLogRepository.save(tokenLog1);
        }
        LocalDateTime expirationDate = LocalDateTime.now().plusMinutes(15L);

        TokenLog tl = new TokenLog();
        tl.setUserId(userId + "");
        tl.setIp(remoteAddress);
        tl.setUserType(userType);
        tl.setPurpose(TokenLogPurpose.RESET);
        tl.setEmail(email);
        tl.setToken(SecurityUtil.generateOpaque(userId));
        tl.setExpiredAt(expirationDate);
        tl.setAttempt(0);
        tl.setIsValid(1);
        tl.setCreatedAt(LocalDateTime.now());
        tl = tokenLogRepository.save(tl);

        return tl.getToken();
    }

    public TokenLog verifyTokenLogByToken(String token, String remoteAddress) {
        Optional<TokenLog> tokenLog0 = tokenLogRepository.findFirstByToken(token);

        if (!tokenLog0.isPresent()) {
            throw new ServiceException(GenericErrors.GE102);
        }

        TokenLog tokenLog = tokenLog0.get();

        if (tokenLog.getIsValid() != 1 || tokenLog.getExpiredAt().isBefore(LocalDateTime.now())) {
//            if (tokenLog.getUserType().equals(UserType.ADMIN)) {
//                throw new ServiceException(UserErrors.UE102);
//            } else {
//                throw new ServiceException(UserErrors.UE101);
//            }
        }

        this.setTokenLogAttempted(tokenLog);
        if (tokenLog.getAttempt() > maxOtpAttempt) {
            throw new ServiceException(GenericErrors.GE104);
        }

        this.setTokenLogUsed(tokenLog, remoteAddress);
        return tokenLog;
    }

    public void setTokenLogAttempted(TokenLog tokenLog) {
        tokenLog.setAttempt(tokenLog.getAttempt() + 1);
        tokenLogRepository.save(tokenLog);
    }

    public void setTokenLogUsed(TokenLog tokenLog, String remoteAddress) {
        tokenLog.setIsValid(2);
        tokenLog.setIp(remoteAddress);
        tokenLogRepository.save(tokenLog);
    }


}
