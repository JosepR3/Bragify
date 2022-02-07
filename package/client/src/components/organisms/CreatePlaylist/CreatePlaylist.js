import React, { useState } from "react";

import { useDispatch } from "react-redux";
// import { PlaylistsSelector } from "../../../redux/playlists/playlists-selector";
import { createPlaylist } from "../../../redux/playlists/playlists-actions";
import { getCurrentUserToken } from "../../../services/auth";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function CreatePlaylist() {
  const dispatch = useDispatch();

  // const { isLoading } = useSelector(PlaylistsSelector);

  const [playlist, setplaylist] = useState({
    name: "",
    description: "",
    collaborative: false,
    thumbnail: "",
    authorId: getCurrentUserToken(),
    // numberSongs: 0,
    // rating: 0,
    // tracks: tracks,
    // followedBy: followedBy,
    // collaborators: collaborators,
  });

  function handleInput(e) {
    const { target } = e;
    const { name, value } = target;

    const newPlaylist = {
      ...playlist,
      [name]: value,
    };
    setplaylist(newPlaylist);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createPlaylist(playlist));
  }

  return (
    <main className="container text-center">
      <section className="profile__wrapper container p-5">
        <h1 className="font-bold align-self-start mx-4 mb-5">
          Create your playlist
        </h1>
        <Form className="px-4 mb-5" onSubmit={handleSubmit}>
          <Form.Group className="form__group mb-4">
            <Form.Label>Playlist name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              value={playlist.name}
              onChange={handleInput}
              placeholder="name your playlist"
              required
            />
          </Form.Group>
          <Form.Group className="form__group mb-4">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              type="text"
              onChange={handleInput}
              value={playlist.description}
              placeholder="what is this playlist about"
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Thumbnail</Form.Label>
            <Form.Control
              type="file"
              value={playlist.thumbnail}
              onChange={handleInput}
              name="thumbnail"
              accept=".jpg"
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            {/* {isLoading && (
              <div
                className="spinner-border  spinner-border-sm ml-2"
                role="status"
              ></div>
            )} */}
            <Button className="my-4" type="submit" variant="log-color">
              Save
            </Button>
          </div>
        </Form>
      </section>
    </main>
  );
}
