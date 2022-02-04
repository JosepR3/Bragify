import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image"

// import "./editProfile.scss"

import {
  resetAuthState,
  editUser
} from "../../../redux/auth/auth-actions";
import { authSelector } from "../../../redux/auth/auth-selectors";

export default function EditUserForm() {
  const dispatch = useDispatch();
  const { currentUser, editSuccess, isLoading, editMessage, isAuthenticated } = useSelector(authSelector);

  const [user, setUser] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    username: currentUser.username,
    email: currentUser.email,
  });

  useEffect(() => {
    dispatch(resetAuthState());
  }, [dispatch]);

  function handleSubmit(e) {
    e.preventDefault();
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

  // if(editSuccess){
  //   const timer = setTimeout(() => {
  //     dispatch(resetAuthState());
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }
  return (
    <main className="container text-center">
      <section className="profile__wrapper container p-5">
        <h1 className="font-bold align-self-start mx-4 mb-5">Profile</h1>
        <Form className="px-4  mb-5" onSubmit={handleSubmit}>
          <div className="d-flex mb-5">
            <Image
              src="https://muhimu.es/wp-content/uploads/2017/04/FRENTE-NITIDA.jpg"
              alt="profile_img"
              className="img-thumbnail"
            />
          </div>
          <Form.Group className="form__group mb-4">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              placeholder="First Name"
              value={user.firstName}
              onChange={handleInput}
              required
            />
          </Form.Group>
          <Form.Group className="form__group mb-4">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={user.lastName}
              onChange={handleInput}
              required
            />
          </Form.Group>
          <Form.Group className="form__group mb-4">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="text"
              placeholder="Username"
              value={user.username}
              onChange={handleInput}
              required
            />
          </Form.Group>
          <Form.Group className="form__group mb-4">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={handleInput}
              required
              disabled
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button className="my-4" type="submit" variant="log-color">
              Save
              {isLoading && (<div className="spinner-border spinner-border-sm" role="status"></div>)}
          </Button>
          </div>
        </Form>
        {editSuccess && <div className="m-0">{editMessage}</div>}
      </section>
    </main>
  );
}
