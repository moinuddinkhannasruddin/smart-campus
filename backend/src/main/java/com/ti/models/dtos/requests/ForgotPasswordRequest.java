package com.ti.models.dtos.requests;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Azam
 */
@Getter
@Setter
@NoArgsConstructor
public class ForgotPasswordRequest {

    private String email;
}
