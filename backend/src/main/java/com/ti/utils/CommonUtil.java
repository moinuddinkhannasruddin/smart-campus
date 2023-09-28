package com.ti.utils;

import jakarta.servlet.http.HttpServletRequest;

/**
 * @author Azam
 */
public class CommonUtil {

    public static String getRemoteAddress(HttpServletRequest request) {
        String ip = "";
        try {
            ip = request.getHeader("X-Forwarded-For");
            if (ip == null) {
                ip = "";
            }
        } catch (Exception ignored) {
        }

        if (ip.equalsIgnoreCase("")) {
            ip = request.getRemoteAddr();
        }

        return ip;
    }
}
