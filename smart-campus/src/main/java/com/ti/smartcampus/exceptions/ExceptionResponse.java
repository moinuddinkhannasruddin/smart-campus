package com.ti.smartcampus.exceptions;

import java.time.LocalDateTime;

/**
 * @author Azam
 */
public record ExceptionResponse(LocalDateTime dateTime, String errorCode, String message, String details) {
}
