
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { authSelector } from "../../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";

import NavBar from "../../molecules/NavBar";
import InnerDash from "../../organisms/InnerDash";
import Copyright from "../../atoms/Copyright";
import MusicPlayer from '../../molecules/MusicPlayer';



function MainContainer() {

  const tracks = useSelector(state => state.songs.playingTrack);
console.log(tracks);
  const { isAuthenticated, isEditing, currentUser } = useSelector(authSelector);

  return (
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


        <InnerDash />
      </Container>

      <Copyright sx={{ pt: 4, mt: 3 }} />
      <MusicPlayer style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />
    </Box>
  );
}

export default MainContainer;
