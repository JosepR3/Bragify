import React  from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image"

import "./PlayList.scss"

export default function CreatePlaylist() {
 
  return (
    <main className="container text-center">
      <section className="profile__wrapper container p-5">
        <h1 className="font-bold align-self-start mx-4 mb-5">Create your playlist</h1>
        <Form className="px-4  mb-5" >
          <div className="d-flex mb-5">
            <Image
              src=""
              alt="upload your desired image for this playlist"
              className="img-thumbnail"
            />
          </div>
          <Form.Group className="form__group mb-4">
            <Form.Label>Playlist name</Form.Label>
            <Form.Control
              name="playlist-name"
              type="text"
              placeholder="name your playlist"
              required
            />
          </Form.Group>
          <Form.Group className="form__group mb-4">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              type="text"
              placeholder="what is this playlist about"
              required
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button className="my-4" type="submit" variant="log-color">
              Save
          </Button>
          </div>
        </Form>
        
      </section>
    </main>
  );
}