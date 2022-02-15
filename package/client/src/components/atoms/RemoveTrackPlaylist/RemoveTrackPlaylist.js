import React from "react";
import { useDispatch } from "react-redux";
import { removeTrackPlaylistAction } from "../../../redux/playlists/playlists-actions";

import Button from "react-bootstrap/Button";

import { BsTrash } from "react-icons/bs";

export default function RemoveTrackPlaylist({ id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTrackPlaylistAction(id));
  }

  return (
    <Button className="btn__trash-round m-0 ms-3" id={id} onClick={handleDelete}>
      <BsTrash className="h-50 w-50" />
    </Button>
  )
}
