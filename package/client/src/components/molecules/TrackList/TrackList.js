import React from "react";
import { useNavigate } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import TrackAlbumCard from "../../atoms/TrackAlbumCard";


function TrackList() {
  const navigate = useNavigate();

  return (
    <ListGroup horizontal>
          <ListGroup.Item onClick={() => navigate("/playlists/single-playlist")}>
            <TrackAlbumCard/>
          </ListGroup.Item>
    </ListGroup>
  );
}

export default TrackList;
