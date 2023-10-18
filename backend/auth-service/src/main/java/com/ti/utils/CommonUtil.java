package com.ti.utils;

import jakarta.servlet.http.HttpServletRequest;

import java.util.Base64;

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

    public static String encodeBase64(String input) {
        return Base64.getEncoder().encodeToString(input.getBytes());
    }

    public static byte[] decodeBase64(String input) {
        return Base64.getDecoder().decode(input);
    }

    public static String toBase64(byte[] input) {
        return Base64.getEncoder().encodeToString(input);
    }
}
