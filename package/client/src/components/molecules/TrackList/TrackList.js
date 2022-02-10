import React from "react";
import { useNavigate } from "react-router-dom";
import TrackAlbumCard from "../../atoms/TrackAlbumCard";


function TrackList() {
  const navigate = useNavigate();
  

  return (
    <TrackAlbumCard onClick={() => navigate("/playlists/single-playlist")}/>
  );
}

export default TrackList;
