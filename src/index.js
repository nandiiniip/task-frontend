import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";

const logError = (error, info) => {
  console.error("Error caught by ErrorBoundary:", error, info);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onError={logError} // Optional: Log errors to an external service
  >
    <App />
  </ErrorBoundary>,
);
