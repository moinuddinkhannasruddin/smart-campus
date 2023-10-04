import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";

const DatePicker = (props) => {
  const {slotProps ={}}= props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {" "}
      <DemoContainer components={["DatePicker"]}>
        {" "}
        <MuiDatePicker
          slotProps={{
            textField: {
              sx: { minWidth: "auto !important", minHeight: "auto !important"},
            },
            ...slotProps
          }}
          label="Select Date"
          
        />{" "}
      </DemoContainer>{" "}
    </LocalizationProvider>
  );
};

export default DatePicker;
