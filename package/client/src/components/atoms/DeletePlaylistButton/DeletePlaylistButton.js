import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletePlaylist } from "../../../redux/playlists/playlists-actions";

import Button from "react-bootstrap/Button";

import { BsTrash } from "react-icons/bs";

export default function DeletePlaylistButton({ id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deletePlaylist(id));
    navigate("/playlists");
    }

  return (
    <Button className="btn__trash-round m-0 ms-3" id={id} onClick={handleDelete}>
      <BsTrash className="h-50 w-50" />
    </Button>
  );
}
