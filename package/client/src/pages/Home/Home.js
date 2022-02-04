import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { authSelector } from "../../redux/auth/auth-selectors";
import { Route, Routes } from "react-router-dom";
import * as ROUTES from "../../routes";
// REDUX
import { useDispatch, useSelector } from "react-redux";
// MATERIAL UI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import SideBar from "../../components/organisms/SideBar/SideBar";
import Copyright from "../../components/atoms/Copyright";
import EditProfile from "../../components/molecules/EditProfile";
import TracksList from "../../components/organisms/TracksList";
import SingleAlbum from "../../components/organisms/SingleAlbum";
import { fetchAllTracks } from "../../redux/tracks/tracks-actions";
import { Container } from "@mui/material";
import { tracksSelector } from "../../redux/tracks/tracks-selector";
import NavBar from "../../components/molecules/NavBar";
import FormCreateTracks from "../../components/organisms/FormCreateTracks/FormCreateTracks";


const mdTheme = createTheme({
  typography: {
    fontFamily: ["circular-std", "Roboto"].join(","),
    fontSize: 20,
  },
});

function Home() {
  const { isAuthenticated, isEditing, currentUser, isSigningOut } = useSelector(authSelector);
  const inTracks = useSelector(tracksSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(ROUTES.SIGN_IN)
    }
  }, [isAuthenticated])

  useEffect(async () => {
    await fetchAllTracks(dispatch);
  }, []);
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
            <NavBar />

            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              {isEditing && <EditProfile />}
              {!isEditing && !inTracks && <InnerDash />}
              {inTracks && <TracksList />}
              {/* <SingleAlbum/> */}
              <FormCreateTracks />
            </Container>
            <Copyright sx={{ pt: 4, mt: 3 }} />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
export default Home;
