import React from "react";
import { Typography } from "@mui/material";
import { DropzoneArea } from 'material-ui-dropzone';

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
