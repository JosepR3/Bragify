import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTrack } from "../../../redux/tracks/tracks-actions";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getCurrentUserUid } from "../../../services/auth";
import withLayout from "../../HOC/withLayout";

const UploadTrack = () => {
  const dispatch = useDispatch();
  const [linkTrack, setLinkTrack] = useState("");
  // const [linkImg, setLinkImg] = useState("");

  const [track, settrack] = useState({
    title: "",
    url: "",
    thumbnail: "",
    genre: "",
    authorId: "",
  });

  function uploadTrack(files) {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "d8nsvm8g");
    axios
      .post("https://api.cloudinary.com/v1_1/drjrc7z28/video/upload", formData)
      .then((res) => {
        setLinkTrack(res.data.secure_url);
      });
  }
  // function uploadImage(files) {
  //   const formData = new FormData();
  //   formData.append("file", files[0]);
  //   formData.append("upload_preset", "d8nsvm8g");
  //   axios
  //     .post("https://api.cloudinary.com/v1_1/drjrc7z28/image/upload", formData)
  //     .then((res) => {
  //       setLinkImg(res.data.secure_url);
  //     });
  // }
  function handleInput(e) {
    const { target } = e;
    const { name, value } = target;

    const newTrack = {
      ...track,
      [name]: value,
    };
    settrack(newTrack);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const completeTrack = Object.assign(
      track,
      { url: linkTrack },
      { authorId: getCurrentUserUid() },
    );
    dispatch(createTrack(completeTrack));
  }

  return (
    <main className="container text-center">
<<<<<<< HEAD
      <section className="auth__wrapper container px-5 py-2">
        <h1 className="font-bold align-self-start m-4">Upload a Track</h1>
        <Form className="px-4 mb-2" onSubmit={handleSubmit}>
          <Form.Group className="edit__form mb-2">
            <Form.Label>Track Title</Form.Label>
=======
      <section className="profile__wrapper container p-5">
        <h1 className="font-bold align-self-start mx-4 mb-5">Upload a Track</h1>
        <Form className="px-4" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title Track</Form.Label>
>>>>>>> dev2
            <Form.Control
              className="mb-2"
              name="title"
              type="text"
              placeholder="Title Track"
              value={track.title}
              onChange={handleInput}
              // required
            />
          </Form.Group>
<<<<<<< HEAD
          <Form.Group className="edit__form mb-2">
            <Form.Label>Track URL</Form.Label>
=======
          <Form.Group className="mb-2">
            <Form.Label>Upload Track</Form.Label>
>>>>>>> dev2
            <Form.Control
              type="file"
              value={track.url}
              onChange={(e) => {
                uploadTrack(e.target.files);
              }}
              name="url"
              accept=".mp3"
              // required
            />
          </Form.Group>
          <Form.Group controlId="formBasicSelect" className="edit__form mb-2">
            <Form.Label>Select genre</Form.Label>
            <Form.Control
              as="select"
              value={track.genre}
              onChange={handleInput}
              name="genre"
            >
              <option value="Rock">Rock</option>
              <option value="Pop">Pop</option>
              <option value="Salsa">Salsa</option>
              <option value="House">House</option>
              <option value="Reggaeton">Reggaeton</option>
              <option value="Trap">Trap</option>
            </Form.Control>
          </Form.Group>
<<<<<<< HEAD
          <Form.Group className="edit__form mb-2">
            <Form.Label>Track Thumbnail</Form.Label>
=======
          <Form.Group className="mb-2">
            <Form.Label>Thumbnail</Form.Label>
>>>>>>> dev2
            <Form.Control
              type="text"
              value={track.thumbnail}
              onChange={handleInput}
              name="thumbnail"
              // required
            />
          </Form.Group>
<<<<<<< HEAD
          <div className="d-flex justify-content-end">
            <Button
              className="btn__save my-2"
              type="submit"
              variant="log-color"
            >
              Upload Track
            </Button>
          </div>
=======

          <Button className="my-4 w-100" type="submit" variant="log-color">
            Create Track
          </Button>
>>>>>>> dev2
        </Form>
      </section>
    </main>
  );
};
export default withLayout(UploadTrack);
