import React from "react";
import { Badge, IconButton, Toolbar, Typography } from "@mui/material";
import { AppBar } from "../Util";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";

const TopBar = (props) => {
  return (
    <AppBar position="absolute" open={props.open}>
      <Toolbar sx={{ pr: "24px" }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={props.onToggle}
          sx={{ marginRight: "36px", ...(props.open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {props.title || ''}
        </Typography>
        <nav>

        </nav>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
