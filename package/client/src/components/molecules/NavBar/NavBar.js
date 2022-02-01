import * as React from "react";

import { signOut } from "../../../redux/auth/auth-actions";
import * as ROUTES from "../../../routes";
import { useDispatch } from "react-redux";
import { authSelector } from "../../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";

import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function NavBar() {
  const dispatch = useDispatch();
  // const { currentUser } = useSelector(authSelector);
  const [anchorElUser, setAnchorElUser] = React.useState();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <MuiAppBar position="relative">
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
          bgcolor: "#4D4D4D",
        }}
      >
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, fontFamily: "Mochiy Pop P One" }}
        >
          BRAGIFY MUSIC
        </Typography>

        <Typography
          color="inherit"
          noWrap
          sx={{ mr: "20px", fontFamily: "Mochiy Pop P One" }}
        >
          Welcome
          {/* Welcome {currentUser.email} */}
        </Typography>

        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="../avatar.png" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem key="editProfile" >
            <Typography textAlign="center">Edit Profile</Typography>
          </MenuItem>
          <MenuItem key="signOut" onClick={handleSignOut}>
            <Typography textAlign="center">Sign Out</Typography>
          </MenuItem>
        </Menu>
      </Toolbar>
    </MuiAppBar>
  );
}

export default NavBar;
