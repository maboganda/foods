import { Box, Container, Toolbar } from "@mui/material";
import React, { useState } from "react";
import LayoutASideBarList from "./LayoutASideBarList";
import SideBar from "./SideBar/SideBar";
import TopBar from "./TopBar/TopBar";

export const LayoutA = (props) => {
  const [open, setOpen] = useState(true);
  const handleDrawerToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <TopBar title={props.title} onToggle={handleDrawerToggle} open={open} />
      <SideBar onToggle={handleDrawerToggle} open={open}>
        {props.customMenu || <LayoutASideBarList />}
      </SideBar>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {props.children}
        </Container>
      </Box>
    </Box>
  );
};
export default LayoutA;
