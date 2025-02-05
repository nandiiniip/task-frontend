import React, { useState } from "react";
import {
  Box,
  List,
  CssBaseline,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import GroupIcon from '@mui/icons-material/Group';
import {
  Drawer,
  DrawerHeader,
  DashBoardContent,
  StyledListItemButton,
    StyledListItemIcon,
} from "../components/DrawerStyles";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
    const navigate = useNavigate();
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
            { text: "Home", icon: <HomeIcon />, path: "/dashboard" },
            { text: "Users", icon: <GroupIcon /> },
          ].map(({ text, icon, path }) => (
            <ListItem key={text} disablePadding onClick={() => navigate(path)}>
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
      </Box>
    </DashBoardContent>
  );
};

export default SideMenu;
