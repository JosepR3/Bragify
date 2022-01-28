import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import fbIcon from "../../assets/images/facebook-48.png";
import ggIcon from "../../assets/images/google-48.png";

import * as ROUTES from "../../routes";

import {
  resetAuthState,
  signUpWithEmailRequest,
  signUpWithGoogleRequest,
} from "../../redux/auth/auth-actions";

import { authSelector } from "../../redux/auth/auth-selectors";

function SignUp() {
  const dispatch = useDispatch();
  const { isSigningUp, signUpError, isAuthenticated } =
    useSelector(authSelector);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
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
    console.log(email)

    dispatch(
      signUpWithEmailRequest(firstName, lastName, username, email, password),
    );

    setFirstName("");
    setLastName("");
    setEmail("");
    setUserName("");
    setPassword("");
  }

  function handleSetFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleSetLastName(e) {
    setLastName(e.target.value);
  }
  function handleSetUserName(e) {
    setUserName(e.target.value);
  }

  function handleSetEmail(e) {
    setEmail(e.target.value);
  }
  function handleSetPassword(e) {
    setPassword(e.target.value);
  }

  // if (isAuthenticated) {
  //   return <Navigate to={ROUTES.LOGIN} />;
  // }

  return (
    <main className="container text-center">
      <h1 className="main__bragify m-5">Bragify</h1>
      <section className="login__signup__wrapper container p-5">
        <h1 className="font-bold align-self-start m-4">Sign Up</h1>
        <Button
          className="login__facebook mt-3 mx-4"
          type="submit"
          variant="facebook-color"
        >
          <img
            className="login__signup__icon me-2"
            src={fbIcon}
            alt="fb-icon"
          ></img>
          Sign Up with Facebook
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
          <Form.Group>
            <Form.Control
              className="mb-2"
              id="input-first-name"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={handleSetFirstName}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              id="input-last-name"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={handleSetLastName}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              id="input-username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleSetUserName}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              id="input-email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleSetEmail}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              id="input-password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleSetPassword}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              id="input-confirm-password"
              type="password"
              placeholder="Confirm Password"
              required
            />
          </Form.Group>
          <Button
            className="my-4 w-100"
            type="submit"
            variant="log-color"
            // disabled={isLoading}
          >
            Sign Up
            {/* {isLoading && <div className="spinner-border spinner-border-sm" role="status"></div>} */}
          </Button>
        </Form>
        {signUpError && <section className="mt-4">{signUpError}</section>}
        <p className="mt-4">
          Do you have an account?
          <a className="register_link" href={ROUTES.LOGIN}>
            Log in
          </a>
        </p>
      </section>
    </main>
  );
}

export default SignUp;
