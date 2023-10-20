package com.ti.smartcampus.exceptions.errors;

import java.util.HashMap;

/**
 * @author Azam
 */
public class EntityErrors {

    public static String EE301 = "EE301";
    public static String EE302 = "EE302";
    public static String EE303 = "EE303";
    public static String EE304 = "EE304";
    public static String EE305 = "EE305";
    public static String EE306 = "EE306";
    public static String EE307 = "EE307";
    public static String EE308 = "EE308";

    protected static HashMap<String, String> responseData = new HashMap<>();

    public static void setErrors(){
        responseData.put(EE301, "Entity id not found");
        responseData.put(EE302, "User is not active. Please contact admin");
        responseData.put(EE303, "You have exceeded your maximum tries. Please try after 15 min");
        responseData.put(EE304, "Old password is not correct");
        responseData.put(EE305, "Logout successfully");
        responseData.put(EE306, "Please enter registered email id");
        responseData.put(EE307, "User id not found");
        responseData.put(EE308, "You don't have access to view the ");
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
