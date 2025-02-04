import { styled } from "@mui/material/styles";
import { Toolbar } from "@mui/material";

const CustomToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export default CustomToolbar;
