import React from "react";
import { useDispatch} from "react-redux";
import { removeTrackPlaylistAction } from "../../../redux/playlists/playlists-actions";

import Button from "react-bootstrap/Button";

import { BsTrash } from "react-icons/bs";

export default function RemoveTrackPlaylist({ track, playlist }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeTrackPlaylistAction({ track: track, playlist: playlist}));
  }

  return (
    <Button className="btn__trash-round m-0 ms-3" track={track} onClick={handleDelete}>
      <BsTrash className="h-50 w-50" />
    </Button>
  )
}
