import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { HomePageContent } from "../Content/HomePage";
import { CustomButton, MainContainer } from "../components";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Typography variant="h2" gutterBottom>
        {HomePageContent.title}
      </Typography>
      <Box display="flex" justifyContent="center" gap={3}>
        <CustomButton onClick={() => navigate("/sign-up")}>
          {HomePageContent.signupButton}
        </CustomButton>
        <CustomButton onClick={() => navigate("/login")}>
          {HomePageContent.loginButton}
        </CustomButton>
      </Box>
    </MainContainer>
  );
};

export default HomePage;
