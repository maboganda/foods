import { Container, Typography } from "@mui/material";
import React from "react";

const Page404 = () => {
  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div>
        <Typography
          component="h1"
          variant="h6"
          sx={{
            display: "inline-block",
            padding: '10px 23px 10px 0',
            margin: 0,
            marginRight: "20px",
            borderRight: "1px solid rgba(0,0,0,0.3)",
          }}
        >
          404
        </Typography>
        <div style={{display: 'inline-block'}}>
          <Typography component="h2" variant="body1">
            This page could not be found.
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default Page404;
