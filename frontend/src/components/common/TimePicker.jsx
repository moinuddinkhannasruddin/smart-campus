import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import CustomTextField from "./TextField";

function TimePickerComponent({ label = "Select Time", value, onChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label={label}
        value={value}
        onChange={onChange}
        size="small"
        renderInput={(params) => (
          <CustomTextField size="small" {...params} fullWidth />
        )}
        viewRenderers={{
          hours: renderTimeViewClock,
          minutes: renderTimeViewClock,
          seconds: renderTimeViewClock,
        }}
      />
    </LocalizationProvider>
  );
}

export default TimePickerComponent;
