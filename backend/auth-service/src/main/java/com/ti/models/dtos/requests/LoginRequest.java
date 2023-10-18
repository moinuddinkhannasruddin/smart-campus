package com.ti.models.dtos.requests;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

/**
 * @author Azam
 */

@Getter
@Setter
public class LoginRequest {

    @NotBlank(message = "E-mail / Username is required")
    private String username;

    @NotBlank(message = "Password is required")
    private String password;


}
