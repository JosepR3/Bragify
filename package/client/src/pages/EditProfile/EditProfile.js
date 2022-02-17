import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios"

import withLayout from "../../components/HOC/withLayout";

import {
  resetAuthState,
  editUser
} from "../../redux/auth/auth-actions";
import { authSelector } from "../../redux/auth/auth-selectors";

function EditUserForm() {
  const dispatch = useDispatch();
  
  const { currentUser, editSuccess, isLoading, editMessage } = useSelector(authSelector);

  const [user, setUser] = useState({
    firstName: currentUser?.firstName,
    lastName: currentUser?.lastName,
    username: currentUser?.username,
    email: currentUser?.email,
    img: currentUser?.img,
  });

  const [linkImg, setLinkImg] = useState("")

  useEffect(() => {
    dispatch(resetAuthState());
  }, [dispatch]);

  function handleSubmit(e) {
    e.preventDefault();
    const completeUserObj = Object.assign(user, { img: linkImg})
    dispatch(editUser(completeUserObj))
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

  function uploadImage(files) {

    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "d8nsvm8g");
    axios.post("https://api.cloudinary.com/v1_1/drjrc7z28/image/upload", formData).then((res) => {
      setLinkImg(res.data.secure_url);
    });
  }
  return (
    <>
      <section className="auth__wrapper container mt-4 px-5 py-2">
        <h1 className="font-bold align-self-start m-4">Profile</h1>
        <Form className="px-4  mb-3" onSubmit={handleSubmit}>
          <img className="mb-2 w-75 h-25" src={currentUser?.img}>
          </img>
          <div className="d-flex mb-2">
            <Form.Group className="mb-2">
              <Form.Label>Img Profile</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => { uploadImage(e.target.files) }}
                name="Img Profile"
                accept=".jpg"
              // required
              />
            </Form.Group>
          </div>
          <Form.Group className="edit__form mb-2">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              className="auth__input"
              name="firstName"
              type="text"
              placeholder="First Name"
              value={currentUser?.firstName}
              onChange={handleInput}
              required
            />
          </Form.Group>
          <Form.Group className="edit__form mb-2">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              className="auth__input"
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={currentUser?.lastName}
              onChange={handleInput}
              required
            />
          </Form.Group>
          <Form.Group className="edit__form mb-2">
            <Form.Label>Username</Form.Label>
            <Form.Control
              className="auth__input"
              name="username"
              type="text"
              placeholder="Username"
              value={currentUser?.username}
              onChange={handleInput}
              required
            />
          </Form.Group>
          <Form.Group className="edit__form mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="auth__input"
              name="email"
              type="email"
              placeholder="Email"
              value={currentUser?.email}
              onChange={handleInput}
              required
              disabled
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button className="btn__save my-2" type="submit" variant="log-color">
              Save
              {isLoading && (<div className="spinner-border spinner-border-sm" role="status"></div>)}
          </Button>
          </div>
        </Form>
        {editSuccess && <div className="m-0">{editMessage}</div>}
      </section>
    </>
  );
}

export default withLayout(EditUserForm);
