import { regexHelper } from "./regex";

export const validateField = (type, value, key) => {
  switch (type) {
    case "email":
      if (key === "email") {
        if (!regexHelper.emailRegex.test(value)) {
          return "Invalid email address";
        }
      }
      return null;
    case "number":
      if (key === "mobileNumber") {
        if (!regexHelper.phoneRegex.test(value)) {
          return "Phone number must be 10 digits";
        }
      }
      return null;
    default:
      return null;
  }
};