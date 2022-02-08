import { useEffect, React } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";


import "./utils/scss/index.scss";

//COMPONENTS
import * as ROUTES from "./routes";
import Home from "./pages/Home";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ResetPassword from "./pages/ResetPassword";
import Tracks from "./pages/Tracks";
import Playlists from "./pages/Playlists";
import NotFound from "./pages/NotFound";
import EditProfile from "./pages/EditProfile";
import UploadTrack from "./components/organisms/UploadTrack";
import SingleAlbum from "./components/organisms/SingleAlbum";

//REDUX
import { onAuthStateChanged } from "./services/auth";
import { syncSignIn, signOut, getUser } from "./redux/auth/auth-actions";

function App() {
  const dispatch = useDispatch();
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
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route exact path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route exact path={ROUTES.EDIT_PROFILE} element={<EditProfile />} />
        <Route exact path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route exact path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />
        <Route exact path={ROUTES.HOME} element={<Home />} />
        <Route exact path={ROUTES.TRACKS} element={<Tracks />} />
        <Route path={ROUTES.PLAYLISTS} element={<Playlists />}>
          <Route path="single-album" element={<SingleAlbum />} />
        </Route>

        <Route exact path={ROUTES.UPLOAD_TRACK} element={<UploadTrack />} />
      </Routes>
  );
}

export default App;
