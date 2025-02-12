import { styled } from "@mui/material/styles";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  textAlign: "center",
  backgroundColor: theme.palette.primary.bgcolor,
  padding: theme.spacing(3),
}));

export default MainContainer;
