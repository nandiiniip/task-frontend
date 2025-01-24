import { styled } from "@mui/material/styles";

const StyledForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2), // Uses spacing from theme
  maxWidth: "400px", // Default max width
  width: "100%", // Responsive width
  margin: "auto", // Centered form
  padding: theme.spacing(2), // Padding using theme
  border: `1px solid ${theme.palette.grey[300]}`, // Dynamic border color
  borderRadius: theme.shape.borderRadius, // Theme's default border radius
  backgroundColor: theme.palette.background.paper, // Theme's background color
}));

export default StyledForm;
