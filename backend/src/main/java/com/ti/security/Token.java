package com.ti.security;

import com.ti.models.constants.UserType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

/**
 * @author Azam
 */

@Getter
@Setter
@NoArgsConstructor
public class Token {

    private String sub;
    private UserType userType;
    private String userId;
    private Integer tokenLogId;
    private String userName;
    private String email;

    public Token(String sub, UserType userType, String email) {
        this.sub = sub;
        this.userType = userType;
        this.email = email;
    }
}
