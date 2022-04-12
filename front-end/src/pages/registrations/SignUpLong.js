import {
  Paper,
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Box,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import ProfileForm from "../../components/Registration/ProfileForm";
import DetailForm from "../../components/Registration/DetailForm";
import Documents from "../../components/Registration/Documents";
import AppLogo from "../../components/UI/AppLogo";
import Copyright from "../../components/UI/Copyright";

const steps = ["Basic", "Secondary", "Supporting Documents"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ProfileForm/>;
    case 1:
      return <DetailForm />;
    case 2:
      return <Documents />;
    default:
      throw new Error("Unknown step");
  }
}

const SignUpLong = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevState) => prevState + 1);
  };

  const handleBack = () => {
    setActiveStep((prevState) => prevState - 1);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper
        variant="outlined"
        sx={{
          my: { xs: 3, md: 6 },
          p: { xs: 2, md: 3 },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AppLogo align="center"/>
        <Typography component="h1" variant="h5" align="center">
          Sign Up
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <>
          {activeStep === steps.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                Thank you for your information.
              </Typography>
              <Typography variant="subtitle1">
                Your information is being reviewed and we will send you an
                update via email or text.
              </Typography>
            </>
          ) : (
            <>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
              </Box>
            </>
          )}
        </>
      </Paper>
      <Copyright />
    </Container>
  );
};

export default SignUpLong;
