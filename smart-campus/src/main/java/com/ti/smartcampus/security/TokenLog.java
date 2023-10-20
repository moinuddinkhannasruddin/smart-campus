package com.ti.smartcampus.security;

import com.ti.smartcampus.models.Base;
import com.ti.smartcampus.models.constants.TokenLogPurpose;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

/**
 * @author Azam
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "token_log")
public class TokenLog extends Base {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "token_log_id")
    private Integer id;

    @Column(name = "user_id", length = 256)
    private String userId;

    @Column(name = "user_types")
    private String userTypes;

    @Column(name = "purpose", columnDefinition = "enum('LOGIN', 'RESET')")
    @Enumerated(EnumType.STRING)
    private TokenLogPurpose purpose;

    @Column(name = "email", length = 256)
    private String email;

    @Column(name = "token", columnDefinition = "text")
    private String token;

    @Column(name = "ip", length = 128)
    private String ip;

    @Column(name = "attempt")
    private Integer attempt;

    //0-Invalid, 1-Valid, 2-Used
    @Column(name = "is_valid")
    private Integer isValid = 1;

    @Column(name = "expired_at")
    private LocalDateTime expiredAt;

    public Integer getAttempt() {
        if (this.attempt == null) {
            return 0;
        }
        return this.attempt;
    }

}
