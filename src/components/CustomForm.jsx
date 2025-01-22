import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const CustomForm = ({ children, onSubmit, maxWidth = "400px", ...props }) => {
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: maxWidth, // Dynamically adjust maxWidth
        width: "100%", // Ensure it adapts to smaller screens
        margin: "auto",
        padding: 2,
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

CustomForm.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  maxWidth: PropTypes.string,
};

export default CustomForm;
