import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(3), // Use theme.spacing for consistent spacing
  backgroundColor: theme.palette.grey[100], // Use theme palette for background
  minHeight: "100vh", // Ensure full viewport height
}));

export default StyledBox;
