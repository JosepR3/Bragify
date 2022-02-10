import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTrack } from "../../../redux/tracks/tracks-actions";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getCurrentUserUid } from "../../../services/auth";
import withLayout from "../../HOC/withLayout";

const UploadTrack = () => {
  const dispatch = useDispatch();

  const [track, settrack] = useState({
    title: "",
    url: "",
    thumbnail: "",
    duration: 0,
    genre: "",
    authorId: getCurrentUserUid(),
  });

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
    dispatch(createTrack(track));
  }

  return (
    <main className="container text-center">
      <section className="auth__wrapper container px-5 py-2">
        <h1 className="font-bold align-self-start m-4">Upload a Track</h1>
        <Form className="px-4 mb-2" onSubmit={handleSubmit}>
          <Form.Group className="edit__form mb-2">
            <Form.Label>Track Title</Form.Label>
            <Form.Control
              className="mb-2"
              name="title"
              type="text"
              placeholder="Title Track"
              value={track.title}
              onChange={handleInput}
              required
            />
          </Form.Group>
          <Form.Group className="edit__form mb-2">
            <Form.Label>Track URL</Form.Label>
            <Form.Control
              type="file"
              value={track.url}
              onChange={handleInput}
              name="url"
              required
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
              <option value="Select"> -Select -</option>
              <option value="Rock">Rock</option>
              <option value="Pop">Pop</option>
              <option value="Salsa">House</option>
              <option value="Salsa">Salsa</option>
              <option value="Salsa">Reggaeton</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="edit__form mb-2">
            <Form.Label>Track Thumbnail</Form.Label>
            <Form.Control
              value={track.thumbnail}
              onChange={handleInput}
              name="thumbnail"
              required
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button
              className="btn__save my-2"
              type="submit"
              variant="log-color"
            >
              Upload Track
            </Button>
          </div>
        </Form>
      </section>
    </main>
  );
};
export default withLayout(UploadTrack);
