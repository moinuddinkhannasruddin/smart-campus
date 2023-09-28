package com.ti.exceptions;

import java.time.LocalDateTime;

/**
 * @author Azam
 */
public record ExceptionResponse(LocalDateTime dateTime, String message, String details) {
}
