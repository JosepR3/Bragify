import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tracksSelector } from "../../../redux/tracks/tracks-selector";
import { playlistsSelector } from "../../../redux/playlists/playlists-selector";
import { fetchTrackById } from "../../../redux/tracks/tracks-actions";
import RemoveTrackPlaylist from "../../atoms/RemoveTrackPlaylist";
import LikeButton from "../../atoms/LikeButton";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

import { BsPlusLg } from "react-icons/bs";
import { useParams } from "react-router-dom";

function SinglePlaylistTracks(){
  const dispatch = useDispatch();
  const { track } = useSelector(tracksSelector);
  const { playlist } = useSelector(playlistsSelector);
  const params = useParams()
  console.log(playlist?.tracks)
  
  useEffect(() => {
    playlist?.tracks && playlist?.tracks.map((track) => dispatch(fetchTrackById(track)))
  }, [playlist?.tracks]);

  const handleTrackId = (e) => {
    const id = e.target.id;
    localStorage.setItem("track", id);
    dispatch(fetchTrackById(id));
  };

  return(
    <>
    <ListGroup horizontal className="tracks__titles-row d-flex w-100 mb-1">
        <ListGroup.Item className="tracks__title"></ListGroup.Item>
        <ListGroup.Item className="tracks__title">Title</ListGroup.Item>
        <ListGroup.Item className="tracks__title">Artist</ListGroup.Item>
        <ListGroup.Item className="tracks__title">Genre</ListGroup.Item>
        <ListGroup.Item className="tracks__title">Duration</ListGroup.Item>
        <ListGroup.Item className="tracks__title"></ListGroup.Item>
      </ListGroup>
      {track &&
        track.map((track) => {
          return (
            <ListGroup
              horizontal
              className="track__row w-100 d-flex"
              key={track._id}
            >
              <ListGroup.Item
                className="track__row-thumbnail p-2"
                id={track._id}
                onClick={(e) => handleTrackId(e)}
              >
                <img
                  className="w-100 h-100"
                  id={track._id}
                  onClick={(e) => handleTrackId(e)}
                  src={track.thumbnail}
                ></img>
              </ListGroup.Item>
              <ListGroup.Item
                id={track._id}
                onClick={(e) => handleTrackId(e)}
                className="track__row-title"
              >
                {track.title}
              </ListGroup.Item>
              <ListGroup.Item className="track__row-artist">
                {track.artists}
              </ListGroup.Item>
              <ListGroup.Item className="track__row-genre">
                {track.genre}
              </ListGroup.Item>
              <ListGroup.Item className="track__row-duration">
                {track.duration}
              </ListGroup.Item>
              <ListGroup.Item className="track__row-buttons">
                <LikeButton track={track._id} />
                <RemoveTrackPlaylist track={track._id} playlist={params.id}/>
                <Button className="btn__options">
                  <BsPlusLg />{" "}
                </Button>
              </ListGroup.Item>
            </ListGroup>
          );
        })
      }
    </>
  );
}

export default SinglePlaylistTracks;