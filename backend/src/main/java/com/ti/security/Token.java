package com.ti.security;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Azam
 */

@Getter
@Setter
@NoArgsConstructor
public class Token {

    private String sub;
    private String userTypes;
    private String userId;
    private Integer tokenLogId;
    private String userName;
    private String email;

    public Token(String sub, String userTypes, String email) {
        this.sub = sub;
        this.userTypes = userTypes;
        this.email = email;
    }
}
