import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./tracksCarrousel.scss"

import TrackCard from "../../atoms/TrackCard";

export default function TracksCarrousel() {
  const albums = useSelector((state) => state.tracks.result);

  return (
    <div className="d-flex gap-3">
      {albums.map((album) => (
        <TrackCard
          key={album.id}
          albumName={album.name}
          artistName={album.owner.firstName + " " + album.owner.lastName}
          tracks={album.tracks}
          albumImageUrl={album.tracks[0].thumbnail}
        />
      ))}
    </div>
  );
}
