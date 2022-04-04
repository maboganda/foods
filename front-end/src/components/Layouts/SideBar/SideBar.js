import { Divider, IconButton, List, Toolbar } from "@mui/material";
import React from "react";
import { Drawer } from "../Util";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const SideBar = (props) => {
  return (
    <Drawer variant="permanent" open={props.open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={props.onToggle}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {props.children}
      </List>
    </Drawer>
  );
};

export default SideBar;
