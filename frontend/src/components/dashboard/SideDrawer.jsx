import React from "react";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";

import CustomButton from "@components/common/CustomButton";
import Text from "@components/common/Text";
import Box from "@components/common/Box";

const SideDrawer = ({
  open,
  closeDrawer,
  title,
  subtitle,
  contentTitle,
  submit,
  cancel,
  apply,
  children,
  showPrimaryButton = true, // Add the showPrimaryButton prop
  showSecondaryButton = true // Add the showSecondaryButton prop
}) => {
  const theme = useTheme();
  return (
    <Drawer
      anchor={"right"}
      open={open}
      PaperProps={{
        sx: { width: "500px" },
      }}
    >
      <Paper
        variant="outlined"
        square
        sx={{
          backgroundColor: theme.palette.primary.main,
          padding: "20px 24px",
          width: "500px",
          position: "fixed",
          marginTop: 0,
          zIndex: 2,
        }}
      >
        <Stack direction="row" justifyContent={"space-between"}>
          <Text
            sx={{
              color: theme.palette.common.white,
              fontWeight: theme.typography.fontWeightMedium,
              fontSize: theme.typography.body2.fontSize,
            }}
          >
            {title}
          </Text>
          <img
            src="/assets/images/close-circle.svg"
            alt="close-circle"
            onClick={() => closeDrawer(false)}
          />
        </Stack>
        <Text
          sx={{
            color: theme.palette.common.white,
            fontSize: theme.typography.fontSize,
            fontWeight: theme.typography.fontWeightLight,
          }}
        >
          {subtitle}
        </Text>
      </Paper>
      <Stack spacing={1.5} p={"20px 24px"} mt={12} pb={18}>
        <Text
          sx={{
            color: theme.palette.grey?.[900],
            fontSize: theme.typography.fontSize,
            fontWeight: theme.typography.fontWeightLight,
          }}
        >
          {contentTitle}
        </Text>

        {children}

        <Box sx={{ position: "fixed", bottom: 0, width: "450px" }}>
          <Stack
            direction={"row"}
            spacing={1}
            justifyContent={"center"}
            alignItems={"center"}
            mb={3}
          >
            {showPrimaryButton && ( // Render the secondary button conditionally
              <CustomButton
                sx={{
                  width: "100%",
                  fontSize: theme.typography.subtitle1,
                }}
                variant="contained"
                text={apply}
                size="medium"
                color="primary"
                onClick={submit}
              />
            )}
            {showSecondaryButton && ( // Render the primary button conditionally
              <CustomButton
                variant="outlined"
                text={cancel}
                onClick={() => closeDrawer(false)}
                size="medium"
                color="secondary"
                sx={{
                  width: "100%",
                  color: theme.palette.grey?.[900],
                  borderColor: theme.palette.grey?.[900],
                  background: theme.palette.common.white,
                  fontSize: theme.typography.subtitle1,
                }}
              />
            )}
          </Stack>
        </Box>
      </Stack>
    </Drawer>
  );
};

export default SideDrawer;
