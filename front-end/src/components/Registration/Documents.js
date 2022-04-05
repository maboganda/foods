import React from "react";
import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { DropzoneArea } from 'material-ui-dropzone';
const Input = styled('input')({
  display: 'none',
});

const Documents = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Upload File
      </Typography>
      <DropzoneArea />
    </>
  );
};

export default Documents;
