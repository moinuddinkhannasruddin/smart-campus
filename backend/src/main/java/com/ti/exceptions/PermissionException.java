package com.ti.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author Azam
 */

@ResponseStatus(HttpStatus.FORBIDDEN)
public class PermissionException extends RuntimeException {

    public PermissionException(String message) {
        super(message);
    }
}
