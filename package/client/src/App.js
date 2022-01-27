import React, { useEffect } from "react";
import {  Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

// import "./styles/App.scss";

import * as ROUTES from "./routes";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";

import { onAuthStateChanged } from "./services/auth";
import { syncSignIn, signOut } from "./redux/auth/auth-actions";

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
    <div className="App__container">
      <Routes>
        <Route path={ROUTES.SIGN_UP} element={<SignUp/>} />
        <Route path={ROUTES.LOGIN} element={<Login/>} />
        <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword/>} />
        <Route path={ROUTES.HOME} element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
