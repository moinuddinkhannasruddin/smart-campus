import React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import CustomButton from "@components/common/CustomButton";
import { useTheme } from "@mui/material/styles";
import TextField from "@components/common/TextField";

const LoginFormComponent = ({
  handleLogin,
  handleChange,
  isValid,
  handleBlur,
  email,
}) => {

  const isButtonEnabled = email.trim() !== "";
  const theme = useTheme();

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "100vh",
        width: "auto",
        mx: 4,
      }}
      spacing={1.5}
    >
      <img
        src="/assets/images/OrianaTech.jpeg"
        alt="logo"
        width={"338px"}
        height={"73.87px"}
      />
      <div style={{ height: "15px" }}></div>
      <Typography
        variant="h6"
        align="center"
        sx={{
          fontWeight: theme.typography.fontWeightMedium,
          color: "#1D2939",
        }}
      >
        👋 Hey there, welcome back
      </Typography>
      <Typography
        variant="subtitle2"
        align="center"
        sx={{ color: "#475467" }}
      >
        It's great to see you here, sign-in to begin your journey.
      </Typography>
      <div style={{ height: "5px" }}></div>
      <Container maxWidth="xs">

        <TextField
          label="Email/Phone"
          variant="outlined"
          size="small"
          onChange={handleChange}
          onBlur={handleBlur}
          error={!isValid && Boolean(isValid)}
          helperText={
            !isValid ? "Please enter a valid email or phone number" : ""
          }
          value={email}
          placeholder="Enter your email or phone"
          InputProps={{ style: { fontSize: 16 } }}
          InputLabelProps={{
            style: {
              fontSize: 16,
              height: "56px"
            },
          }}
          labelSx={{
            marginBottom: "6px",
            fontSize: theme.typography.subtitle2
          }}
        />
        <div style={{ height: "10px" }}></div>
        <FormControlLabel
          sx={{ alignSelf: "start" }}
          value="end"
          control={<Checkbox size="small" />}
          label={
            <Typography variant="subtitle2" color={"#475467"}>
              Remember me
            </Typography>
          }
          labelPlacement="end"
        />
        <div style={{ height: "10px" }}></div>
        <CustomButton
          sx={{ width: "100%" }}
          variant="contained"
          text="Send OTP"
          size="medium"
          color="primary"
          onClick={handleLogin}
          disabled={!isButtonEnabled}
        />
      </Container>
    </Stack>
  );
};

export default LoginFormComponent;
