import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import fbIcon from "../../assets/images/facebook-48.png";
import ggIcon from "../../assets/images/google-48.png";

import * as ROUTES from "../../routes";

import {
  resetAuthState,
  signUpWithEmailRequest,
  signUpWithGoogleRequest,
  editUser
} from "../../redux/auth/auth-actions";

import { authSelector } from "../../redux/auth/auth-selectors";

function SignUp() {
  const dispatch = useDispatch();
  const { isSigningUp, signUpError, isLoading } =
    useSelector(authSelector);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    dispatch(resetAuthState());
  }, [dispatch]);

  function handleSignInWithGoogle(e) {
    e.preventDefault();
    dispatch(signUpWithGoogleRequest());
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(signUpWithEmailRequest( user.email, user.password));
    dispatch(editUser(user))
  }

  function handleInput(e) {
    const { target } = e;
    const { name, value } = target;

    const newUser = {
      ...user,
      [name]: value,
    };
    setUser(newUser);
  }

  return (
    <main className="container text-center">
      <h1 className="main__bragify m-5">Bragify</h1>
      <section className="signIn__signUp__wrapper container p-5">
        <h1 className="font-bold align-self-start m-4">Sign Up</h1>
        <Button
          className="signIn__facebook mt-3 mx-4"
          type="submit"
          variant="facebook-color"
        >
          <img
            className="signIn__signUp__icon me-2"
            src={fbIcon}
            alt="fb-icon"
          ></img>
          Sign Up with Facebook
        </Button>
        <Button
          className="signIn__google mt-3 mx-4"
          type="button"
          variant="google-color"
          onClick={handleSignInWithGoogle}
          disabled={isSigningUp}
        >
          <img
            className="signIn__signUp__icon me-4"
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
              name="firstName"
              type="text"
              placeholder="First Name"
              value={user.firstName}
              onChange={handleInput}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={user.lastName}
              onChange={handleInput}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              name="username"
              type="text"
              placeholder="Username"
              value={user.username}
              onChange={handleInput}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              name="email"
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={handleInput}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={handleInput}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={user.confirmPassword}
              onChange={handleInput}
              required
            />
          </Form.Group>
          <Button
            className="my-4 w-100"
            type="submit"
            variant="log-color"
          >
            Sign Up
            {isLoading && (
              <div
                className="spinner-border spinner-border-sm"
                role="status"
              ></div>
            )}
          </Button>
        </Form>
        {signUpError && <section className="mt-4">{signUpError}</section>}
        <p className="mt-4">
          Do you have an account?
          <a className="register_link" href={ROUTES.SIGN_IN}>
            Sign in
          </a>
        </p>
      </section>
    </main>
  );
}

export default SignUp;
