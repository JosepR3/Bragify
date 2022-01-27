import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


import * as ROUTES from "../../routes";

import "./login.scss";

import {
  resetAuthState,
  signInWithEmailRequest,
  signUpWithGoogleRequest,
} from "../../redux/auth/auth-actions";

import { authSelector } from "../../redux/auth/auth-selectors";

function Login() {
  const dispatch = useDispatch();
  const { isSigningUp, signUpErro, isAuthenticatedr } =
    useSelector(authSelector);

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
      <section className="login__register__wrapper container p-5">
        <h1 className="font-bold align-self-start m-4">Log in</h1>
        <Button
          className="login__facebook mt-3 mx-4"
          type="submit"
          variant="facebook-color"
        >
          Continue with Facebook
        </Button>
        <Button
          className="login__google mt-3 mx-4"
          type="submit"
          variant="google-color"
        >
          Continue with Google
        </Button>
        <div className="breaker my-5">
          <hr className="division_line"></hr>
          or
          <hr className="division_line"></hr>
        </div>
        <Form className="px-4" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              id="input_email"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Control
              id="input_password"
              type="password"
              placeholder="Password"
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
            // disabled={isLoading}
          >
            Log In
            {/* {isLoading && <div className="spinner-border spinner-border-sm" role="status"></div>} */}
          </Button>
        </Form>
        <p className="mt-4">
          Don't you have an account?
          <a className="register_link" href="">
            {" "}
            Create one
          </a>
        </p>
      </section>
    </main>
  );
}

export default Login;
