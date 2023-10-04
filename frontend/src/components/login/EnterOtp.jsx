import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import OtpInput from "react-otp-input";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import CustomButton from "@components/common/CustomButton";
import { regexHelper } from "@helpers/regex";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles(() => ({
  otpInput: {
    height: "52px",
    width: "52px",
    border: "1px solid var(--gray-300, #D0D5DD)",
    flex: "1",
    textAlign: "center",
    borderRadius: "8px",
  },
}));

const EnterOtp = ({
  otp,
  isValidOtp,
  handleOtpChange,
  handleVerifyOtp,
  isEmailEditable,
  email,
  handleEditEmail,
  isValidEmail,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [counter, setCounter] = useState(30);
  const [isResendEnabled, setIsResendEnabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isEmailEditable) {
      setIsResendEnabled(false);
      return;
    }

    if (counter > 0 && !isResendEnabled) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCounter(30);
      setIsResendEnabled(true);
    }
  }, [counter, isResendEnabled, isEmailEditable]);

  const handleResendClick = () => {
    setIsResendEnabled(false);
  };

  const handleSendOtpClick = () => {
    if (
      isValidOtp &&
      (regexHelper.emailRegex.test(email) ||
        regexHelper.phoneRegex.test(email))
    ) {
      if (isEmailEditable) {
        handleVerifyOtp();
      } else {
        navigate("/dashboard");
      }
    }
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100vh", width: "auto", mx: 4 }}
      spacing={1.5}
    >
      <img
        src="/assets/images/WhatsApp Image 2023-05-08 at 11.46 2.png"
        alt="logo"
        width={"338px"}
        height={"73.87px"}
      />
      <div style={{ height: "15px" }}></div>
      <Box sx={{ justifyContent: "left", alignContent: "left" }}>
        <Stack direction="row" spacing={1} >
          <img
            src="/assets/images/verify.svg"
            alt="logo"
            width={"38px"}
            height={"38px"}
          />
          <Typography
            variant="body1"
            align="center"
            sx={{
              fontWeight: theme.typography.fontWeightMedium,
              color: "#1D2939",
            }}
          >
            Confirm your email
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ color: "#104960" }}
          >
            <>
              We have sent OTP to {email}
              {!isEmailEditable && (
                <img
                  src="/assets/images/Edit.svg"
                  alt="edit"
                  width={24}
                  height={24}
                  onClick={() => handleEditEmail(false)}
                  style={{ cursor: "pointer", marginLeft: "10px", marginBottom: "-4px" }}
                />
              )}
            </>
          </Typography>
        </Stack>
        <OtpInput
          value={otp}
          onChange={handleOtpChange}
          numInputs={6}
          renderSeparator={<span>&nbsp;</span>}
          inputStyle={classes.otpInput}
          renderInput={(props) => (
            <input
              {...props}
              style={{
                color: "#D0D5DD",
                fontSize: 20,
                border: "1px solid #D0D5DD",
              }}
            />
          )}
        />
        {!isValidOtp && (
          <p style={{ color: "red" }}>Please enter a valid 6-digit OTP</p>
        )}

        {(isEmailEditable || isValidEmail) && (
          <CustomButton
            sx={{ width: "100%", mt: 3, mb: 3 }}
            variant="contained"
            text={isEmailEditable ? "Send OTP" : "Confirm OTP"}
            size="medium"
            color="primary"
            onClick={handleSendOtpClick}
            disabled={isEmailEditable || !isValidEmail}
          />
        )}

        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={1}
        >
          <Typography
            variant="buttonMedium"
            sx={{
              color: "#104960",
              cursor: isResendEnabled ? "pointer" : "not-allowed",
            }}
            onClick={handleResendClick}
          >
            Resend {isResendEnabled ? "" : `OTP in 00:${counter}`}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default EnterOtp;