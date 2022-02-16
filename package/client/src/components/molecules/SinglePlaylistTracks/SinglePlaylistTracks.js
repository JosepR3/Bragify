import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { playlistsSelector } from "../../../redux/playlists/playlists-selector";
import RemoveTrackPlaylist from "../../atoms/RemoveTrackPlaylist";
import LikeButton from "../../atoms/LikeButton";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { fetchPlaylistTrack } from "../../../redux/playlists/playlists-actions";
import { BsPlusLg } from "react-icons/bs";
import { useParams } from "react-router-dom";

function SinglePlaylistTracks() {
  const { playlist } = useSelector(playlistsSelector);
  const params = useParams();
  const dispatch = useDispatch();

  const playlistTracks = playlist?.tracks;

  const handleTrackId = (trackUrl) => {
    dispatch(fetchPlaylistTrack(trackUrl))
  };

  return (
    <>
      <ListGroup horizontal className="tracks__titles-row d-flex w-100 mb-1">
        <ListGroup.Item className="tracks__title"></ListGroup.Item>
        <ListGroup.Item className="tracks__title">Title</ListGroup.Item>
        <ListGroup.Item className="tracks__title">Artist</ListGroup.Item>
        <ListGroup.Item className="tracks__title">Genre</ListGroup.Item>
        <ListGroup.Item className="tracks__title">Duration</ListGroup.Item>
        <ListGroup.Item className="tracks__title"></ListGroup.Item>
      </ListGroup>

      {playlistTracks &&
        playlistTracks.map((track) => {
          return (
            <ListGroup
              horizontal
              className="track__row w-100 d-flex"
              key={track.trackId}
              onClick={() => handleTrackId(track?.url)}
            >
              <ListGroup.Item
                className="track__row-thumbnail p-2"
                id={track.trackId}
                onClick={() => handleTrackId(track?.url)}
              >
                <img
                  className="w-100 h-100"
                  id={track.trackId}
                  onClick={() => handleTrackId(track?.url)}
                  src={track.thumbnail}
                ></img>
              </ListGroup.Item>
              <ListGroup.Item
                id={track.trackId}
                onClick={() => handleTrackId(track?.url)}
                className="track__row-title"
              >
                {track.name}
              </ListGroup.Item>
              <ListGroup.Item className="track__row-artist">
                {track.artists}
              </ListGroup.Item>
              <ListGroup.Item className="track__row-genre">
                {track.genre}
              </ListGroup.Item>
              <ListGroup.Item className="track__row-buttons">
                <LikeButton track={track.track} />
                <RemoveTrackPlaylist
                  trackId={track.trackId}
                  playlist={params.id}
                />
                <Button className="btn__options">
                  <BsPlusLg />
                </Button>
              </ListGroup.Item>
            </ListGroup>
          );
        })}
    </>
  );
}

export default SinglePlaylistTracks;
