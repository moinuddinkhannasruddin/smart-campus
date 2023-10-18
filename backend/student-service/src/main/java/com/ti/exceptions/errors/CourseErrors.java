package com.ti.exceptions.errors;

import java.util.HashMap;

/**
 * @author Azam
 */
public class CourseErrors {
    public static String CE401 = "CE401";
    public static String CE402 = "CE402";
    public static String CE403 = "CE403";
    public static String CE404 = "CE404";
    public static String CE405 = "CE405";
    public static String CE406 = "CE406";

    protected static HashMap<String, String> responseData = new HashMap<>();

    public static void setErrors(){
        responseData.put(CE401,
                "Password recovery mail already sent. Please check your spam or wait for 15  min for new reset reqCEst");
        responseData.put(CE402, "Link has been expired or invalid");
        responseData.put(CE403, "OTP is invalid or expired");
        responseData.put(CE404, "You have exceeded login attempts");
        responseData.put(CE405, "Invalid OTP");
        responseData.put(CE406, "Header is missing or invalid token.");
    }

    public static String getErrorDetails(String errorCode) {
        setErrors();
        return responseData.get(errorCode);
    }

    public static String getErrorMessage(String errorCode) {
        String message = getErrorDetails(errorCode);
        if (message != null) {
            return message;
        }
        return errorCode;
    }
}
