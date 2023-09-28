package com.ti.repositories;

import com.ti.models.constants.TokenLogPurpose;
import com.ti.models.constants.UserType;
import com.ti.security.TokenLog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * @author Azam
 */
public interface TokenLogRepository extends JpaRepository<TokenLog, Integer> {

    Optional<TokenLog> findFirstByUserIdAndUserTypeAndPurposeAndIsValid(String userId, UserType userType, TokenLogPurpose purpose, int isValid);

    Optional<TokenLog> findFirstByToken(String token);
}
