import React, { useState } from "react";
import {
  Box,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Drawer,
  DrawerHeader,
  DashBoardContent,
  StyledListItemButton,
    StyledListItemIcon,
} from "../components/DrawerStyles";
import { SideMenuContent } from "../Content/SideMenuContent";

const SideMenu = () => {
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <DashBoardContent>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <IconButton color="inherit" onClick={handleDrawerToggle}>
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
        <Divider />
        <List>
          {[
            { text: "Home", icon: <HomeIcon /> },
            { text: "Dashboard", icon: <DashboardIcon /> },
            { text: "Settings", icon: <SettingsIcon /> },
          ].map(({ text, icon }) => (
            <ListItem key={text} disablePadding>
              <StyledListItemButton open={open}>
                <StyledListItemIcon
                  open={open}
                >
                  {icon}
                </StyledListItemIcon>
                {open && <ListItemText primary={text} />}
              </StyledListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box>
        <DrawerHeader />
        <Typography variant="h4">{SideMenuContent.heading}</Typography>
      </Box>
    </DashBoardContent>
  );
};

export default SideMenu;
