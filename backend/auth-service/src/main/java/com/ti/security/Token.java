package com.ti.security;

import com.ti.models.dtos.common.UserDto;
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

    private UserDto sub;
    private Integer tokenLogId;
}
