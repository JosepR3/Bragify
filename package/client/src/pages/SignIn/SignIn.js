import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { fbIcon, ggIcon, bIcon } from "../../assets";

import * as ROUTES from "../../routes";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  resetAuthState,
  signInWithEmailRequest,
  signUpWithGoogleRequest,
} from "../../redux/auth/auth-actions";
import { authSelector } from "../../redux/auth/auth-selectors";

function SignIn() {
  const dispatch = useDispatch();
  const { isSigningUp, isAuthenticated, isLoading, signUpError } =
    useSelector(authSelector);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(resetAuthState());
  }, [dispatch]);

  function handleSignInWithGoogle(e) {
    e.preventDefault();
    dispatch(signUpWithGoogleRequest());
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTES.HOME);
    }
  }, [isAuthenticated]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signInWithEmailRequest(email, password));
  }

  function handleSetEmail(e) {
    setEmail(e.target.value);
  }

  function handleSetPassword(e) {
    setPassword(e.target.value);
  }

  if (isAuthenticated) {
    return <Link to={ROUTES.HOME} />;
  }

  return (
    <main className="container text-center">
      <div className="d-flex justify-content-center align-items-center my-4">
        <img className="brand__img mx-2" src={bIcon}></img>
        <h1 className="text-white">Bragify</h1>
      </div>
      <section className="auth__wrapper container px-5 py-2">
        <h1 className="font-bold align-self-start my-3 mx-4">Sign in</h1>
        <Button
          className="btn__facebook mt-3 mx-4"
          type="submit"
          variant="facebook-color"
        >
          <img className="auth__icon me-2" src={fbIcon} alt="fb-icon"></img>
          Continue with Facebook
        </Button>
        <Button
          className="btn__google mt-3 mx-4"
          type="button"
          variant="google-color"
          onClick={handleSignInWithGoogle}
          disabled={isSigningUp}
        >
          <img className="auth__icon me-4" src={ggIcon} alt="gg-icon"></img>
          Continue with Google
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
              className="auth__input"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleSetPassword}
              required
            />
          </Form.Group>
          <div className="d-flex justify-content-end mb-3">
            <a className="auth__link" href={ROUTES.RESET_PASSWORD}>
              Did you forget your password?
            </a>
          </div>
          <Button
            className="auth__btn my-2 w-100"
            type="submit"
            variant="log-color"
            disabled={isLoading}
          >
            Sign in
            {isLoading && (
              <div
                className="spinner-border  spinner-border-sm ml-2"
                role="status"
              ></div>
            )}
          </Button>
          {signUpError && (
            <div className="bg-danger rounded mt-2" role="status">
              Wrong email or password, <br />
              please try again
            </div>
          )}
        </Form>
        <div className="d-flex align-self-end mt-2 mx-4">
          <p>Dont you have an account?</p>
          <a className="auth__link ps-1" href={ROUTES.SIGN_UP}>
            Create one
          </a>
        </div>
      </section>
    </main>
  );
}

export default SignIn;
