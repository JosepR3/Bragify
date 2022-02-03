import React from "react";
import { Navigate } from "react-router-dom";
import { authSelector } from "../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import * as ROUTES from "../../routes";

// Material UI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import SideBar from "../../components/organisms/SideBar/SideBar";
// import InnerDash from "../../components/organisms/InnerDash";
// import Copyright from "../../components/atoms/Copyright";
// import EditProfile from "../../components/molecules/EditProfile";
// import TrackTrackssList from "../../components/organisms/TrackTracksList";

import MainContainer from "../../components/organisms/MainContainer";

const mdTheme = createTheme({
  typography: {
    fontFamily: ["circular-std", "Roboto"].join(","),
    fontSize: 20,
  },
});

function Home() {
  const { isAuthenticated, isEditing, currentUser } = useSelector(authSelector);

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.SIGN_IN} />;
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <SideBar />
        <MainContainer />
      </Box>
    </ThemeProvider>

  );
}
export default Home;
