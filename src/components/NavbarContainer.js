import { AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";

const NavbarContainer = styled(AppBar)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  // justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: theme.palette.primary.navcolor,
  padding: theme.spacing(0),
}));

export default NavbarContainer;
