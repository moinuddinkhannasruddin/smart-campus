package com.ti.smartcampus.exceptions.errors;

import java.util.HashMap;

/**
 * @author Azam
 */
public class GenericErrors {
    public static String GE101 = "GE101";
    public static String GE102 = "GE102";
    public static String GE103 = "GE103";
    public static String GE104 = "GE104";
    public static String GE105 = "GE105";
    public static String GE106 = "GE106";

    protected static HashMap<String, String> responseData = new HashMap<>();

    public static void setErrors(){
        responseData.put(GE101,
                "Password recovery mail already sent. Please check your spam or wait for 15  min for new reset request");
        responseData.put(GE102, "Link has been expired or invalid");
        responseData.put(GE103, "OTP is invalid or expired");
        responseData.put(GE104, "You have exceeded login attempts");
        responseData.put(GE105, "Invalid OTP");
        responseData.put(GE106, "Header is missing or invalid token.");
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
