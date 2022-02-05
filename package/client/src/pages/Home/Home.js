import React from "react";
import { Navigate } from "react-router-dom";
import { authSelector } from "../../redux/auth/auth-selectors";
import * as ROUTES from "../../routes";

// REDUX
import { useSelector } from "react-redux";

// MATERIAL UI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

//COMPONENTS
import SideBar from "../../components/organisms/SideBar";
import Copyright from "../../components/atoms/Copyright";
import EditProfile from "../../components/molecules/EditProfile";
import SingleAlbum from "../../components/organisms/SingleAlbum";

import MusicPlayer from "../../components/molecules/MusicPlayer";
import TrackList from "../../components/molecules/TrackList";

const mdTheme = createTheme({
  typography: {
    fontFamily: ["circular-std", "Roboto"].join(","),
    fontSize: 20,
  },
});

function Home() {
  const { isAuthenticated, isEditing} = useSelector(authSelector);


  if (!isAuthenticated) {
    return <Navigate to={ROUTES.SIGN_IN} />;
  }

  return (
    <>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <SideBar />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >

            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              {isEditing && <EditProfile />}
              <SingleAlbum />

              <TrackList/>
            </Container>
            <Copyright sx={{ pt: 4, mt: 3 }} />
          </Box>
          <MusicPlayer />
        </Box>
      </ThemeProvider>
    </>
  );
}
export default Home;
