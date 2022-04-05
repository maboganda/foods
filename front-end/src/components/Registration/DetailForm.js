import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

const DetailForm = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Additional Detail
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            id="name"
            name="name"
            label="Name"
            fullWidth
            variant="standard"
          />
        </Grid>
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
        <Grid item xs={12} sm={6}>
          <TextField
            id="lat"
            name="lat"
            label="Latitude"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lng"
            name="lng"
            label="Longitude"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default DetailForm;
