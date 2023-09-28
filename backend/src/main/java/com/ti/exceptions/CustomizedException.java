package com.ti.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;

/**
 * @author Azam
 */

@ControllerAdvice
public class CustomizedException extends ResponseEntityExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ExceptionResponse> handleAllException(Exception exception, WebRequest webRequest) {

        return new ResponseEntity<>(new ExceptionResponse(LocalDateTime.now(), exception.getMessage(), webRequest.getDescription(false)), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(DataNotFoundException.class)
    public ResponseEntity<ExceptionResponse> handleDataNotFoundException(DataNotFoundException exception, WebRequest webRequest) {

        return new ResponseEntity<>(new ExceptionResponse(LocalDateTime.now(), exception.getMessage(), webRequest.getDescription(false)), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ExceptionResponse> handleAccessDeniedException(AccessDeniedException exception, WebRequest webRequest) {

        return new ResponseEntity<>(new ExceptionResponse(LocalDateTime.now(), exception.getMessage(), webRequest.getDescription(false)), HttpStatus.UNAUTHORIZED);
    }

}
