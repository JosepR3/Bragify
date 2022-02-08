import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import TrackAlbumCard from "../../atoms/TrackAlbumCard";
import { playlistStateSelector } from "../../../redux/playlists/playlists-selector";
import { fetchAllPlaylists } from "../../../redux/playlists/playlists-actions";

function TrackList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPlaylists);
  }, [dispatch]);

  const { playlists } = useSelector(playlistStateSelector);
  console.log(playlists);

  return (
    <ListGroup horizontal>
          <ListGroup.Item
            onClick={() => navigate("/playlists/single-playlist")}
          >
            <TrackAlbumCard/>
          </ListGroup.Item>
    </ListGroup>
  );
}

export default TrackList;
