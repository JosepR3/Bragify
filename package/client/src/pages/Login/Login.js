import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import fbIcon from "../../assets/images/facebook-48.png"
import ggIcon from "../../assets/images/google-48.png"



import * as ROUTES from "../../routes";

import "./Login.scss";

import {
  resetAuthState,
  signInWithEmailRequest,
  signUpWithGoogleRequest,
} from "../../redux/auth/auth-actions";

import { authSelector } from "../../redux/auth/auth-selectors";

function Login() {
  const dispatch = useDispatch();
  const { isSigningUp, signUpErro, isAuthenticated, isLoading } = useSelector(authSelector);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    dispatch(resetAuthState());
  }, [dispatch]);

  function handleLoginWithGoogle(e) {
    e.preventDefault();
    dispatch(signUpWithGoogleRequest());
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(signInWithEmailRequest(email, password));

    setEmail("");
    setPassword("");
  }

  function handleSetEmail(e) {
    setEmail(e.target.value);
  }

  function handleSetPassword(e) {
    setPassword(e.target.value);
  }

  if (isAuthenticated) {
    return <Navigate to={ROUTES.HOME} />;
  }

  return (
    <main className="container text-center">
      <h1 className="main__bragify m-5">Bragify</h1>
      <section className="login__signup__wrapper container p-5">
        <h1 className="font-bold align-self-start m-4">Log in</h1>
        <Button
          className="login__facebook mt-3 mx-4"
          type="submit"
          variant="facebook-color"
        >
          <img className="login__signup__icon me-2" src={fbIcon} alt="fb-icon"></img>Continue with Facebook
        </Button>
        <Button
          className="login__google mt-3 mx-4"
          type="button"
          variant="google-color"
          onClick={handleLoginWithGoogle}
          disabled={isSigningUp}
        >
          <img
            className="login__signup__icon me-4"
            src={ggIcon}
            alt="gg-icon"
          ></img>
          Sign Up with Google
        </Button>
        <div className="breaker my-5">
          <hr className="division_line"></hr>
          or
          <hr className="division_line"></hr>
        </div>
        <Form className="px-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
            <Form.Control
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleSetEmail}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleSetPassword}
              required
            />
          </Form.Group>
          <div className="d-flex justify-content-end mb-3">
            <a href="">Have you forgotten your password?</a>
          </div>
          <Button
            className="my-4 w-100"
            type="submit"
            variant="log-color"
            disabled={isLoading}
          >
            Log In
            {isLoading && <div className="spinner-border  spinner-border-sm m-2" role="status"></div>}
          </Button>
        </Form>
        <p className="mt-4">
          Don't you have an account?
          <a className="register_link" href={ROUTES.SIGN_UP}>
            {" "}
            Create one
          </a>
        </p>
      </section>
    </main>
  );
}

export default Login;