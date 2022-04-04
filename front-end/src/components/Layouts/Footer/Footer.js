import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Copyright from "../../UI/Copyright";

const Footer = (props) => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">{props.children}</Typography>
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
