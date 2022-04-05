import { Avatar } from "@mui/material";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const AppLogo = ({ align }) => {
  return (
    <Avatar sx={{ m: 1, bgcolor: "secondary.main", alignSelf: align }}>
      <LockOutlinedIcon />
    </Avatar>
  );
};

export default AppLogo;
