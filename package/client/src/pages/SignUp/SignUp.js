import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { fbIcon, ggIcon, bIcon } from "../../assets";

import * as ROUTES from "../../routes";

import {
  resetAuthState,
  signUpWithEmailRequest,
  signUpWithGoogleRequest,
} from "../../redux/auth/auth-actions";

import { authSelector } from "../../redux/auth/auth-selectors";

function SignUp() {
  const dispatch = useDispatch();
  const { isSigningUp, signUpError, isLoading, isAuthenticated } =
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
    dispatch(signUpWithEmailRequest(user));
    // dispatch(editUser(user))
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

  if (isAuthenticated) {
    return <Navigate to={ROUTES.HOME} />;
  }

  return (
    <main className="container text-center">
      <div className="d-flex justify-content-center align-items-center my-4">
        <img className="brand__img mx-2" src={bIcon}></img>
        <h1 className="text-white">Bragify</h1>
      </div>
      <section className="auth__wrapper container px-5 py-2">
        <h1 className="font-bold align-self-start my-3 mx-4">Sign Up</h1>
        <Button
          className="btn__facebook mt-3 mx-4"
          type="submit"
          variant="facebook-color"
        >
          <img className="auth__icon me-2" src={fbIcon} alt="fb-icon"></img>
          Sign Up with Facebook
        </Button>
        <Button
          className="btn__google mt-3 mx-4"
          type="button"
          variant="google-color"
          onClick={handleSignInWithGoogle}
          disabled={isSigningUp}
        >
          <img className="auth__icon me-4" src={ggIcon} alt="gg-icon"></img>
          Sign Up with Google
        </Button>
        <div className="breaker my-3">
          <hr className="division_line"></hr>
          or
          <hr className="division_line"></hr>
        </div>
        <Form className="px-4" onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Control
              className="auth__input"
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
              className="auth__input"
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
              className="auth__input"
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
              className="auth__input"
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
              className="auth__input"
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
              className="auth__input"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={user.confirmPassword}
              onChange={handleInput}
              required
            />
          </Form.Group>
          <Button
            className="auth__btn my-2 w-100"
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
        {signUpError && (
          <section className="bg-danger rounded mt-2">{signUpError}</section>
        )}
        <div className="d-flex align-self-end mt-2 mx-4">
          <p>Do you have an account?</p>
          <a className="register__link ps-1" href={ROUTES.SIGN_IN}>
            Sign in
          </a>
        </div>
      </section>
    </main>
  );
}

export default SignUp;
