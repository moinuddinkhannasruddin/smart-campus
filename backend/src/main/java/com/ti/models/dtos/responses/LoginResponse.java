package com.ti.models.dtos.responses;

import com.ti.models.dtos.common.UserDto;
import lombok.Getter;
import lombok.Setter;

/**
 * @author Azam
 */

@Getter
@Setter
public class LoginResponse {

    private String token;

    private UserDto user;

}
