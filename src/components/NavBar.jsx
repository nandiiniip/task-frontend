import React from "react";
import { AppBar, Typography, IconButton, Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NavbarContainer from "./NavbarContainer";
import CustomToolbar from "./CustomToolbar";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <NavbarContainer>
      <AppBar>
        <CustomToolbar>
          <Typography variant="h6" component="div">
            MyProject
          </Typography>
          <Box>
            <IconButton color="inherit" onClick={() => navigate("about")}>
              <InfoIcon />
            </IconButton>
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </CustomToolbar>
      </AppBar>
    </NavbarContainer>
  );
};

export default NavBar;
