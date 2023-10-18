package com.ti.exceptions;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author Azam
 */

@Getter
@Setter
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ServiceException extends RuntimeException{

    private String errorCode = "";

    public ServiceException(String message){
        super(message);
    }

    public ServiceException(String exception, String errorCode) {
        super(exception);
        this.errorCode = errorCode;
    }
}
