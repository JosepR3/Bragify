import React from "react";
import { useSelector } from "react-redux";
import { authSelector } from "../../../redux/auth/auth-selectors";
import TrackAlbumCard from "../../atoms/TrackAlbumCard/Track-album-card";

function TrackList() {
  const { currentUser } = useSelector(authSelector);
  const user = currentUser.username;

  return (
    <div>
      <h4>Playlists made By {user}</h4>
      <TrackAlbumCard />
    </div>
  );
}

export default TrackList;
