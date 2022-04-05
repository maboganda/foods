import React from "react";
import { Typography, Grid, TextField, Divider } from "@mui/material";
import BasicDatePicker from "../DatePicker/BasicDatePicker";


const ProfileForm = () => {
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
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
              id="email"
              name="email"
              label="Email"
              fullWidth
              type="email"
              autoComplete="email"
              variant="standard"
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
              id="contactNumber"
              name="contactNumber"
              label="Contact Number"
              fullWidth
              type="tel"
              variant="standard"
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BasicDatePicker label="Birthdate" />
        </Grid>
        <Divider/>
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
