import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./app.scss";

import * as ROUTES from "./routes";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ResetPassword from "./pages/ResetPassword";
import NotFound from "./pages/NotFound";
// import TracksList from "./components/organisms/TracksList/TracksList";
import TrackSongsList from "./components/organisms/TrackSongsList"
import { onAuthStateChanged } from "./services/auth";
import { syncSignIn, signOut } from "./redux/auth/auth-actions";

import PrivateRoute from "./components/PrivateRoute";

//TODO  private list 
// import PrivateRoute from "./components/PrivateRoute";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = onAuthStateChanged((user) => {
      if (user) {
        dispatch(syncSignIn());
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
        <Route exact path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route exact path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />
        <Route path={ROUTES.HOME} element={<PrivateRoute />} >
          <Route exact path={ROUTES.HOME} element={<Home />} />
        </Route>
        <Route path={ROUTES.TRACK_SONG_LIST} element={<PrivateRoute />} >
          <Route exact path={ROUTES.TRACK_SONG_LIST} element={<TrackSongsList />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
