import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { NotFoundPageContent } from "../Content/NotFoundPage";
import { StyledBox } from "../components";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <StyledBox>
      <Typography variant="h1" color="primary" gutterBottom>
        {NotFoundPageContent.numberTitle}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {NotFoundPageContent.pageContent}
      </Typography>
      <Button variant="contained" color="primary" onClick={goToHome}>
        {NotFoundPageContent.buttonName}
      </Button>
    </StyledBox>
  );
};

export default NotFoundPage;
