import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createTrack } from "../../../redux/tracks/tracks-actions";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getCurrentUserUid } from "../../../services/auth";
import withLayout from "../../HOC/withLayout";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import Col from "react-bootstrap/Col";


const UploadTrack = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [linkTrack, setLinkTrack] = useState("");
  const [show, setShow] = useState(false);
  const [track, settrack] = useState({
    title: "",
    url: "",
    thumbnail: "",
    genre: "",
    authorId: "",
    artists: "",
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
    navigate("/tracks")
  }

  return (<>
    <aside>
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Body>{ track.title} Upload successfully!</Toast.Body>
        </Toast>
        </Col>
      </Row>
      </aside>
    
      <section className="auth__wrapper container mt-4 px-5 py-2">
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
            <Form.Label>Artists</Form.Label>
            <Form.Control
              className="mb-2"
              name="artists"
              type="text"
              placeholder="Artists"
              value={track.artists}
              onChange={handleInput}
              required
            />
          </Form.Group>
          <Form.Group className="edit__form mb-2">
            <Form.Label>Track URL</Form.Label>
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
          <Form.Group className="edit__form mb-2">
            <Form.Label>Track Thumbnail</Form.Label>
            <Form.Control
              type="text"
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
              onClick={() => setShow(true)}
            >
              Upload Track
            </Button>
          </div>
        </Form>
      </section>
    
    </>
  );
};
export default withLayout(UploadTrack);
