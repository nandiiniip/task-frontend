import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { HomePageContent } from "../Content/HomePage";
import { CustomButton } from "../components";
import { TitleTypography } from "../styled-components/TypographyStyles";
import MainContainer from "../styled-components/MainContainer";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <TitleTypography variant="h2" gutterBottom>
        {HomePageContent.title}
      </TitleTypography>
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
