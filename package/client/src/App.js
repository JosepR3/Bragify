import  { useEffect, React } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./app.scss";

//COMPONENTS
import * as ROUTES from "./routes";
import Home from "./pages/Home";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ResetPassword from "./pages/ResetPassword";
import Tracks from "./pages/Tracks";
import Playlists from "./pages/Playlists";
import NotFound from "./pages/NotFound";
import UploadTrack from "./components/organisms/UploadTrack";

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
    <div className="app__container">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route exact path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route exact path={ROUTES.TRACKS} element={<Tracks />} />
        <Route exact path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route exact path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />
        <Route exact path={ROUTES.HOME} element={<Home />} />
        <Route exact path={ROUTES.PLAYLISTS} element={<Playlists />} />
        <Route exact path={ROUTES.UPLOAD_TRACK} element={<UploadTrack />} />
      </Routes>
    </div>
  );
}

export default App;
