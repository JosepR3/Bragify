import React from "react";
// import { fetchPlaylistById } from "../../../redux/playlists/playlists-actions";
// Components
import SinglePlaylistHeader from "../../molecules/SinglePlaylistHeader";
import SinglePlaylistTracks from "../../molecules/SinglePlaylistTracks";

function SinglePlaylist() {
  return (
    <div className="mb-3">
      <SinglePlaylistHeader />
      <SinglePlaylistTracks /> 
    </div>
  );
}

export default SinglePlaylist;
