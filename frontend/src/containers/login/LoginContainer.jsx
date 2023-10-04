import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import LoginFormComponent from "@components/login/LoginFormComponent";
import EnterOtp from "@components/login/EnterOtp";
import { regexHelper } from "@helpers/regex";
import WithRouter from "@helpers/withRouter";
import Box from "@/components/common/Box";

class LoginContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      emailOrPhone: "",
      isValid: true,
      otp: "",
      isValidOtp: true,
      isLoginSuccessful: false,
      isEmailEditable: false,
      isValidEmail: false, // New state for isValidEmail
    };
  }

  componentDidMount() { }

  handleChange = ({ name, value }) => {
    this.setState({
      emailOrPhone: value,
      isValid: this.validateInput(value),
      isValidEmail:
        regexHelper.emailRegex.test(value) ||
        regexHelper.phoneRegex.test(value),
    });
  };

  validateInput = (value) => {
    const phoneNumberLength = value === "10" && !isNaN(parseFloat(value));
    if (regexHelper.emailRegex.test(value)) {
      return true;
    }

    if (regexHelper.phoneRegex.test(value) || phoneNumberLength) {
      return value.length <= 10;
    }

    return false;
  };

  handleLogin = () => {
    const { emailOrPhone } = this.state;
    if (this.validateInput(emailOrPhone)) {
      localStorage.setItem("Email/Phone", emailOrPhone);
      this.setState({
        isLoginSuccessful: true,
      });
    }
  };

  handleOtpChange = (otpValue) => {
    if (regexHelper.otpRegex.test(otpValue)) {
      this.setState({
        otp: otpValue,
        isValidOtp: otpValue.length === 6,
      });
    }
  };

  handleVerifyOtp = () => {
    if (this.state.isValidOtp) {
      this.props.router.navigate('/dashboard');
    }
  };

  toggleLogin = (value) => {
    this.setState({ isLoginSuccessful: value });
  };

  render() {
    const {
      isLoginSuccessful,
      otp,
      isValidOtp,
      emailOrPhone,
      isEmailEditable,
      isValid,
      isValidEmail,
    } = this.state;

    let email = emailOrPhone;

    return (
      <Box>
        <Grid sx={{ height: "100vh" }} container spacing={0}>
          <Grid item xs={7}>
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                height: "100vh",
                width: "auto",
                backgroundColor: "#F9FAFB",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src="/assets/images/IMAGE.svg"
                alt="welcome-img"
                width={618}
                height={453}
              />
            </Stack>
          </Grid>
          <Grid item xs={5}>
            {isLoginSuccessful ? (
              <EnterOtp
                otp={otp}
                isValidOtp={isValidOtp}
                handleOtpChange={this.handleOtpChange}
                handleVerifyOtp={this.handleVerifyOtp}
                isEmailEditable={isEmailEditable}
                email={email}
                handleEditEmail={this.toggleLogin}
                isValidEmail={isValidEmail}
              />
            ) : (
              <LoginFormComponent
                handleLogin={this.handleLogin}
                handleChange={this.handleChange}
                handleBlur={this.handleBlur}
                email={email}
                isValid={isValid}
              />
            )}
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default WithRouter(LoginContainer);