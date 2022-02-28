import { useEffect, React } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./utils/scss/index.scss";
import * as ROUTES from "./routes";

//PAGE COMPONENTS
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ResetPassword from "./pages/ResetPassword";
import Tracks from "./pages/Tracks";
import Playlists from "./pages/Playlists";
import NotFound from "./pages/NotFound";
import EditProfile from "./pages/EditProfile";

//COMPONENTS
import UploadTrack from "./components/organisms/UploadTrack";
import CreatePlaylist from "./components/organisms/CreatePlaylist";
import SinglePlaylist from "./pages/SinglePlaylist/SinglePlaylist";
import Footer from "./components/organisms/Footer/";

//REDUX
import { onAuthStateChanged } from "./services/auth";
import { syncSignIn, signOut, getUser } from "./redux/auth/auth-actions";
import { authSelector } from "./redux/auth/auth-selectors";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(authSelector);
  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = onAuthStateChanged((user) => {
      if (user) {
        dispatch(syncSignIn());
        dispatch(getUser());
      } else {
        dispatch(signOut());
      }
    });
    return () => {
      if (unsubscribeFromAuth) {
        unsubscribeFromAuth();
      }
    };
  }, [dispatch]);
  
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTES.EDIT_PROFILE} element={<EditProfile />} />
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.TRACKS} element={<Tracks />} />
        <Route path={ROUTES.PLAYLISTS} element={<Playlists />} />
        <Route
        
          path="playlists/single-playlist/:id"
          element={<SinglePlaylist />}
        />
        <Route path={ROUTES.UPLOAD_TRACK} element={<UploadTrack />} />
        <Route
        
          path={ROUTES.CREATE_PLAYLIST}
          element={<CreatePlaylist />}
        />
      </Routes>
      {isAuthenticated && <Footer />}
    </>
  );
}

export default App;
