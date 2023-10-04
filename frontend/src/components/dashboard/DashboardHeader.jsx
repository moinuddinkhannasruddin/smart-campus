import React, { useState } from "react";

import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";

import Text from "@components/common/Text";
import CustomButton from "@components/common/CustomButton";

const DashboardHeader = () => {
  const theme = useTheme();

  const [today, setToday] = useState("");

  const data = ["Weekly", "Monthly", "Quarterly", "Half-Yearly", "Yearly"];

  const handleChange = (event) => {
    setToday(event.target.value);
  };
  return (
    <>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        spacing={1}
        display={"flex"}
        alignItems={"center"}
      >
        <Text
          sx={{
            color: theme.palette.grey?.[900],
            fontSize: theme.typography.h6.fontSize,
            fontWeight: theme.typography.fontWeightRegular,
          }}
        >
          Welcome back, Shubham Builders
        </Text>
        <Stack direction="row" spacing={1}>
          <FormControl sx={{ minWidth: 250 }} size="small">
            <InputLabel
              id="today's-label"
              sx={{
                color: theme.palette.grey?.[900],
                fontSize: theme.typography.fontSize,
                fontWeight: theme.typography.fontWeightMedium,
              }}
            >
              Today's
            </InputLabel>
            <Select
              labelId="today's-label"
              id="todays-label"
              value={today}
              label="Today's"
              onChange={handleChange}
              variant="outlined"
              sx={{
                height: 40,
                border: theme.palette.common.border,
                fontSize: theme.typography.fontSize,
                backgroundColor: theme.palette.common.white,
              }}
            >
              {data.map((item) => (
                <MenuItem
                  style={{
                    fontSize: theme.typography.fontSize,
                    fontWeight: theme.typography.fontWeightRegular,
                    color: theme.palette.grey?.[900],
                  }}
                  key={item}
                  value={item}
                >
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <CustomButton
            variant="outlined"
            text="Export"
            size="medium"
            color="secondary"
            sx={{
              color: theme.palette.grey?.[900],
              fontSize: theme.typography.fontSize,
              borderColor: theme.palette.common.border,
              background: theme.palette.common.white,
            }}
            startIcon={<img src="/assets/images/export.svg" alt="export" />}
          />
        </Stack>
      </Stack>
      <Text
        sx={{
          color: theme.palette.grey?.[400],
          fontSize: theme.typography.subtitle1,
          fontWeight: theme.typography.fontWeightLight,
        }}
      >
        Track, manage and forecast your customers and bookings.
      </Text>
    </>
  );
};

export default DashboardHeader;
