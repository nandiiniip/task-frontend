import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import { Box, Typography } from "@mui/material";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        padding: 3,
      }}
    >
      <Typography variant="h2" gutterBottom>
        Welcome!!
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <CustomButton onClick={() => navigate("/signup")}>Sign Up</CustomButton>
        <CustomButton onClick={() => navigate("/login")}>Login</CustomButton>
      </Box>
    </Box>
  );
};

export default HomePage;
