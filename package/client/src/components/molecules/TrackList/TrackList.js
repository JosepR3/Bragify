import React from "react";
import {useNavigate} from "react-router-dom";

import ListGroup from "react-bootstrap/ListGroup"
import TrackAlbumCard from "../../atoms/TrackAlbumCard"
export default function TrackList() {
const navigate = useNavigate();
// const location = useLocation();

  const AlbumArray = [
    <TrackAlbumCard key="key" />,
    <TrackAlbumCard key="key" />,
    <TrackAlbumCard key="key" />,
    <TrackAlbumCard key="key" />,
    <TrackAlbumCard key="key" />,
  ];

  return (
    <ListGroup horizontal>
    {AlbumArray.map((album) => {
      return (
        <ListGroup.Item key="key" 
          onClick={() => navigate("/playlists/single-album")}
        >
          {album}
        </ListGroup.Item>
      );
    })}
    </ListGroup>
    )
}
