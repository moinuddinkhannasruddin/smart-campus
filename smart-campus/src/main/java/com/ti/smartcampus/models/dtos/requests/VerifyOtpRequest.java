package com.ti.smartcampus.models.dtos.requests;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Azam
 */

@Getter
@Setter
@NoArgsConstructor
public class VerifyOtpRequest {

    @Email(message = "Please check email")
    @NotNull
    private String email;

    @NotNull
    @NotBlank
    private String otp;
}
