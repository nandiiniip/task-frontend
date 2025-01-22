import React from "react";
import PropTypes from "prop-types";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div
      role="alert"
      style={{
        padding: "2rem",
        textAlign: "center",
        backgroundColor: "#fef2f2",
        color: "#b91c1c",
        border: "1px solid #fca5a5",
        borderRadius: "8px",
        minHeight: "100vh",
      }}
    >
      <h2>Something went wrong.</h2>
      <p>{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#ef4444",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Try Again
      </button>
    </div>
  );
};

// Define PropTypes for the component
ErrorFallback.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired, // Validate error.message
  }).isRequired,
  resetErrorBoundary: PropTypes.func.isRequired, // Validate resetErrorBoundary
};

export default ErrorFallback;
