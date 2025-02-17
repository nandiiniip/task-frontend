import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { UserMenuContent } from "../Content/UserMenu";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice"
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    setAnchorEl(null);
  }

  const handleProfile = () => {
    navigate("/dashboard/profile");
    setAnchorEl(null);
  }

  return (
    <>
      <IconButton color="inherit" onClick={handleClick}>
        <AccountCircleIcon />
      </IconButton>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "account-icon",
        }}
      >
        <MenuItem onClick={handleProfile}>{UserMenuContent.profile}</MenuItem>
        <MenuItem onClick={handleLogout}>{UserMenuContent.logout}</MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
