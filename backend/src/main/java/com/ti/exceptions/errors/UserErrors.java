package com.ti.exceptions.errors;

import java.util.HashMap;

/**
 * @author Azam
 */
public class UserErrors {

    public static String UE201 = "UE201";
    public static String UE202 = "UE202";
    public static String UE203 = "UE203";
    public static String UE204 = "UE204";
    public static String UE205 = "UE205";
    public static String UE206 = "UE206";
    public static String UE207 = "UE207";
    public static String UE208 = "UE208";
    public static String UE209 = "UE209";
    public static String UE210 = "UE210";
    public static String UE211 = "UE211";

    protected static HashMap<String, String> responseData = new HashMap<>();

    public static void setErrors(){
        responseData.put(UE201,
                "Incorrect User Id or Password");
        responseData.put(UE202, "User is not active. Please contact admin");
        responseData.put(UE203, "You have exceeded your maximum tries. Please try after 15 min");
        responseData.put(UE204, "Old password is not correct");
        responseData.put(UE205, "Logout successfully");
        responseData.put(UE206, "Please enter registered email id");
        responseData.put(UE207, "User id not found");
        responseData.put(UE208, "You don't have access to view the ");
        responseData.put(UE209, "Forgot password mail sent successfully.");
        responseData.put(UE210, "Password reset successfully, Please login");
        responseData.put(UE211, "Password Change - Reset successfully ");
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
