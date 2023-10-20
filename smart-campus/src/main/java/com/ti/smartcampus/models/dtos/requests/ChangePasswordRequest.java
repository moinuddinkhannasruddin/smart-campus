package com.ti.smartcampus.models.dtos.requests;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Azam
 */
@Getter
@Setter
@NoArgsConstructor
public class ChangePasswordRequest {

    private String oldPassword;
    private String newPassword;

}