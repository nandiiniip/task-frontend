import React from "react";
import { NavBar, SideMenu } from "../components";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const DashBoard = () => {
  return (
    <>
      <NavBar />
      <SideMenu />
      <Box component="main">
        <Outlet />
      </Box>
    </>
  );
};

export default DashBoard;
