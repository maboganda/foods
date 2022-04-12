import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const BasicDatePicker = (props) => {
  const [value, setValue] = useState(null);

  const handleChange = (newValue) => {
    setValue(newValue);
    props?.onCustomDateChange && props.onCustomDateChange(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={props.label || "Date"}
        value={value}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField {...params} fullWidth variant="standard" />
        )}
      />
    </LocalizationProvider>
  );
};

export default BasicDatePicker;
