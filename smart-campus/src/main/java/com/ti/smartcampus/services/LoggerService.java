package com.ti.smartcampus.services;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

/**
 * @author Azam
 */
@Log4j2
@Service
public class LoggerService {

    public void info(String message, String methodName, String data) {
        String logString = "Info [" +
                "methodName = '" + methodName +
                "', message = '" + message +
                "', data = '" + data +
                "']";
        log.info(logString);
    }

    public void error(String message, String methodName, String data) {
        String logString = "Error [" +
                "methodName = '" + methodName +
                "', message = '" + message +
                "', data = '" + data +
                "']";
        log.error(logString);
    }
}
