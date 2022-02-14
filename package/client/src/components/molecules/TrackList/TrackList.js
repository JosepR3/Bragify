import React from "react";
import { useSelector } from "react-redux";
import { authSelector } from "../../../redux/auth/auth-selectors";
import TrackAlbumCard from "../../atoms/TrackAlbumCard/Track-album-card";

function TrackList() {
  return (
    <div className="mt-3">
      <TrackAlbumCard />
    </div>
  );
}

export default TrackList;
