import React from "react";
import PropTypes from "prop-types";
import MainContainer from "./MainContainer";
import CustomButton from "./CustomButton";
import { ErrorFallbackContent } from "../Content/ErrorFallback";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <MainContainer role="alert">
      <h1>{ErrorFallbackContent.header}</h1>
      <p>{error.message}</p>
      <CustomButton onClick={resetErrorBoundary} exception>
        {ErrorFallbackContent.buttonName}
      </CustomButton>
    </MainContainer>
  );
};

ErrorFallback.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

export default ErrorFallback;
