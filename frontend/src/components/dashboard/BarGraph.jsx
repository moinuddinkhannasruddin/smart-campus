import React from "react";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";

import Text from "@components/common/Text";
import CustomButton from "@components/common/CustomButton";

const DashboardBarGraph = ({ onClickDrawer }) => {
  const theme = useTheme();
  return (
    <Stack spacing={1}>
      <Paper>
        <Stack
          direction="row"
          justifyContent={"space-between"}
          spacing={1}
          display={"flex"}
          alignItems={"center"}
          padding={2.5}
        >
          <Text
            sx={{
              color: theme.palette.grey?.[900],
              fontWeight: theme.typography.fontWeightMedium,
              fontSize: theme.typography.subtitle1,
            }}
          >
            Booking Status
          </Text>
          <Stack direction="row" spacing={1}>
            <CustomButton
              variant="outlined"
              text="Download"
              size="medium"
              color="secondary"
              sx={{
                color: theme.palette.grey?.[900],
                fontSize: theme.typography.fontSize,
                background: theme.palette.common.white,
                borderColor: theme.palette.common.border,
              }}
              startIcon={<img src="/assets/images/export.svg" alt="export" />}
            />
            <CustomButton
              variant="outlined"
              text="Add Filters"
              size="medium"
              color="secondary"
              sx={{
                color: theme.palette.grey?.[900],
                fontSize: theme.typography.fontSize,
                background: theme.palette.common.white,
                borderColor: theme.palette.common.border,
              }}
              startIcon={
                <img
                  src="/assets/images/Filters lines.svg"
                  alt="Filters lines"
                />
              }
              onClick={() => onClickDrawer(true)}
            />
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default DashboardBarGraph;
