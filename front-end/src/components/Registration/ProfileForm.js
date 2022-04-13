import React, { useEffect, useState } from "react";
import { Typography, Grid, TextField, Divider } from "@mui/material";
import BasicDatePicker from "../DatePicker/BasicDatePicker";

const ProfileForm = () => {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile_number: "",
    birthdate: "",
  });

  useEffect(()=> {
    console.log(values)
  }, [values])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBirthdateChange = (newDate) => {
    setValues((prevState) => ({
      ...prevState,
      birthdate: newDate,
    }));
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Customer profile
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="first_name"
            label="First name"
            fullWidth
            variant="standard"
            values={values.first_name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="last_name"
            label="Last name"
            fullWidth
            variant="standard"
            values={values.last_name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            name="email"
            label="Email"
            fullWidth
            type="email"
            variant="standard"
            values={values.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="mobileNumber"
            name="mobile_number"
            label="Mobile Number"
            fullWidth
            type="tel"
            variant="standard"
            values={values.mobile_number}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BasicDatePicker
            label="Birthdate"
            onCustomDateChange={handleBirthdateChange}
          />
        </Grid>
        <Divider />
        <Grid item xs={12} sm={12}>
          <TextField
            id="address"
            name="address"
            label="Street Address"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            name="city"
            label="City"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="province"
            name="province"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileForm;
