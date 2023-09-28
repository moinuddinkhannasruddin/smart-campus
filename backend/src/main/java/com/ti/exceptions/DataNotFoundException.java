package com.ti.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author Azam
 */


@ResponseStatus(HttpStatus.NOT_FOUND)
public class DataNotFoundException extends RuntimeException{

    public DataNotFoundException(String message) {
        super(message);
    }
}
