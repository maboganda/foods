import { Typography } from "@mui/material";
import React from "react";
import Title from "../UI/Title";

const MiniCard = (props) => {
  return (
    <>
      <Title>{props.title}</Title>
      <Typography component="p" variant="h4">{props.detail}</Typography>
      <Typography color="text.secondary" sx={{flex: 1}}>
        {props.subDetail}
      </Typography>
      {props.children}
    </>
  );
};

export default MiniCard;
