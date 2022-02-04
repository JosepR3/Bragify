import  { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ROUTES from "../../routes"; 
// import "./ResetPassword.scss";

import Form from "react-bootstrap/Form";

import {
  sendPasswordResetEmail,
  resetAuthState,
} from "../../redux/auth/auth-actions";
import { authSelector } from "../../redux/auth/auth-selectors";

function buttonText(loading, sent) {
  if (loading) {
    return "Sending...";
  }

  if (sent) {
    return "Email Sent!";
  }

  return "Send password reset email";
}

function ResetPassword() {
  const dispatch = useDispatch();
  const { isSendingPasswordReset, passwordResetSent } =
    useSelector(authSelector);

  const [email, setEmail] = useState("");

  useEffect(() => {
    dispatch(resetAuthState());
  }, [dispatch]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(sendPasswordResetEmail(email));
    setEmail("");
  }

  function handleSetEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <>
      <main className="container text-center">
        <section className="resetPassword__wrapper container p-5">
          <h1 className="font-bold align-self-start">Password reset 🔄</h1>
          <h5 className="font-bold align-self-start text-secondary ">
            Please write your email
          </h5>
          <Form onSubmit={handleSubmit} classname="mt-2">
            <Form.Group>
              <Form.Control
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleSetEmail}
                required
              />
            </Form.Group>
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isSendingPasswordReset || passwordResetSent}
            >
              {buttonText(isSendingPasswordReset, passwordResetSent)}
            </button>
          </Form>
          <p className="mt-4">
            <a className="register_link" href={ROUTES.SIGN_IN}>
              go back to sign in
            </a>
          </p>
        </section>
      </main>
    </>
  );
}

export default ResetPassword;
