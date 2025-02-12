// src/styles/drawerStyles.js
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import { Box, ListItemIcon, ListItemButton } from "@mui/material";

const drawerWidth = 240;

export const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

export const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: "60px",
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(1),
  ...theme.mixins.toolbar,
}));

export const DashBoardContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(1),
}));

export const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ open }) => ({
  justifyContent: open ? "initial" : "center",
}));

export const StyledListItemIcon = styled(ListItemIcon, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ open }) => ({
  minWidth: open ? "40px" : "100%",
  justifyContent: "center",
}));

export const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.primary.navcolor, // Uses theme.js color
}));

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open
    ? {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": {
          ...openedMixin(theme),
          top: "64px", // ✅ Fix: Adjust Drawer top position
        },
      }
    : {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": {
          ...closedMixin(theme),
          top: "64px", // ✅ Fix: Adjust Drawer top position
        },
      }),
}));
