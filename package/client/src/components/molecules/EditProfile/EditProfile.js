import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ROUTES from "../../../routes";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


import {
  resetAuthState,
  editUser
} from "../../../redux/auth/auth-actions";
import { authSelector } from "../../../redux/auth/auth-selectors";

export default function EditUserForm() {
  const dispatch = useDispatch();
  const { isSigningUp, signUpError, isLoading, isAuthenticated } = useSelector(authSelector);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    dispatch(resetAuthState());
  }, [dispatch]);

  function handleSubmit(e) {
    e.preventDefault();
    // dispatch(signUpWithEmailRequest( user));
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
      <section className="signIn__signUp__wrapper container p-5">
        <h1 className="font-bold align-self-start m-4">Profile</h1>
        <Form className="px-4" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              className="mb-2"
              name="firstName"
              type="text"
              placeholder="First Name"
              value={user.firstName}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={user.lastName}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              name="username"
              type="text"
              placeholder="Username"
              value={user.username}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              name="email"
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={handleInput}
            />
          </Form.Group>
          <Button className="my-4 w-100" type="submit" variant="log-color">
            Save
            {isLoading && (
              <div
                className="spinner-border spinner-border-sm"
                role="status"
              ></div>
            )}
          </Button>
        </Form>
        {signUpError && <section className="mt-4">{signUpError}</section>}
      </section>
    </main>
  );
}
