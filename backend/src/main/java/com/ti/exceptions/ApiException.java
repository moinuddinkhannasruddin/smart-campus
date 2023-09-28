package com.ti.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author Azam
 */

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ApiException extends RuntimeException{

    String errorCode;

    public ApiException(String exception) {
        super(exception);
    }

    public ApiException(String errorCode,String exception) {
        super(exception);
        this.errorCode = errorCode;
    }
}
