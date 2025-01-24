// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      bgcolor: "#f5f5f5",
      redcolor: "#ef4444",
    },
    secondary: {
      main: "#ff4081",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          minWidth: "8rem",
        },
      },
    },
  },
  customStyles: {
    exceptionButton: {
      backgroundColor: "#ef4444",
      color: "white",
      border: "none",
      padding: "0.5rem 1rem",
      borderRadius: "4px",
      cursor: "pointer",
    },
  },
});

export default theme;
