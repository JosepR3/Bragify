import React from "react";
import { Navigate } from "react-router-dom";
import { authSelector } from "../../redux/auth/auth-selectors";
import { useDispatch, useSelector } from "react-redux";
import * as ROUTES from "../../routes";

// Material UI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

// Components
import NavBar from "../../components/molecules/NavBar";
import SideBar from "../../components/organisms/SideBar/SideBar";
import InnerDash from "../../components/organisms/InnerDash";
import Copyright from "../../components/atoms/Copyright";
import EditProfile from "../../components/molecules/EditProfile";
import TracksList from "../../components/organisms/TracksList";
import SingleAlbum from "../../components/organisms/singleAlbum";
import singleAlbum from "../../components/organisms/singleAlbum";
import { fetchAllTracks } from "../../redux/tracks/tracks-actions";


const mdTheme = createTheme({
  typography: {
    fontFamily: ["circular-std", "Roboto"].join(","),
    fontSize: 20,
  },
});


function Home() {
  const { isAuthenticated, isEditing, currentUser } = useSelector(authSelector);
  const dispatch = useDispatch()

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.SIGN_IN} />;
  }
  React.useEffect(async () =>{
    await fetchAllTracks(dispatch)     },[])
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
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              {/* {isEditing && <EditProfile />}
              {!isEditing && <InnerDash />} */}
              <TracksList/> 
               {/* <SingleAlbum/> */}
            </Container>
            <Copyright sx={{ pt: 4, mt: 3 }} />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
export default Home;
