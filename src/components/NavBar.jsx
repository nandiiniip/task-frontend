import React from "react";
import { AppBar, Typography, IconButton, Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import NavbarContainer from "../styled-components/NavbarContainer";
import CustomToolbar from "../styled-components/CustomToolbar";
import { useNavigate } from "react-router-dom";
import UserMenu from "./UserMenu";

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
            <UserMenu />
          </Box>
        </CustomToolbar>
      </AppBar>
    </NavbarContainer>
  );
};

export default NavBar;
