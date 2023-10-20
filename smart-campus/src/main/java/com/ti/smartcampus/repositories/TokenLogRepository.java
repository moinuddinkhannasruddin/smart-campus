package com.ti.smartcampus.repositories;

import com.ti.smartcampus.models.constants.TokenLogPurpose;
import com.ti.smartcampus.security.TokenLog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * @author Azam
 */
public interface TokenLogRepository extends JpaRepository<TokenLog, Integer> {

    Optional<TokenLog> findFirstByUserIdAndUserTypesAndPurposeAndIsValid(String userId, String userTypes, TokenLogPurpose purpose, int isValid);

    Optional<TokenLog> findFirstByToken(String token);
}
