import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { tracksSelector } from "../../../redux/tracks/tracks-selector";
import { playlistsSelector } from "../../../redux/playlists/playlists-selector";
import { fetchTrackById } from "../../../redux/tracks/tracks-actions";
import RemoveTrackPlaylist from "../../atoms/RemoveTrackPlaylist";
import LikeButton from "../../atoms/LikeButton";
import ListGroup from "react-bootstrap/ListGroup";

import { useParams } from "react-router-dom";

function SinglePlaylistTracks(){
  const dispatch = useDispatch();
  // const { track } = useSelector(tracksSelector);
  const { playlist } = useSelector(playlistsSelector);

  const params = useParams()

  const playlistTracks = playlist?.tracks
  
  useEffect(() => {
    // playlist?.tracks && playlist?.tracks.map((track) => dispatch(fetchTrackById(track)))
  }, []);
  console.log(playlistTracks)
  const handleTrackId = (e) => {
console.log(e)

    dispatch(fetchTrackById());
  };

  return(
    <>
    <ListGroup horizontal className="tracks__titles-row d-flex w-100 mx-2 mb-1">
        <ListGroup.Item className="tracks__title"></ListGroup.Item>
        <ListGroup.Item className="tracks__title">Title</ListGroup.Item>
        <ListGroup.Item className="tracks__title">Artist</ListGroup.Item>
        <ListGroup.Item className="tracks__title">Genre</ListGroup.Item>
        <ListGroup.Item className="tracks__title"></ListGroup.Item>
      </ListGroup>
      {playlistTracks &&
        playlistTracks.map((track) => {
          return (
            <ListGroup
              horizontal
              className="track__row w-100 mx-2 d-flex"
              key={track.trackId}
            >
              <ListGroup.Item
                className="track__row-thumbnail p-2"
                id={track.trackId}
                onClick={(e) => handleTrackId(e)}
              >
                <img
                  className="w-100 h-100"
                  id={track.trackId}
                  onClick={(e) => handleTrackId(e)}
                  src={track.thumbnail}
                ></img>
              </ListGroup.Item>
              <ListGroup.Item
                id={track.trackId}
                onClick={(e) => handleTrackId(e)}
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
              <ListGroup.Item className="track__row-buttons ms-auto">
                <LikeButton track={track.track} />
                <RemoveTrackPlaylist trackId={track.trackId} playlist={params.id}/>
              </ListGroup.Item>
            </ListGroup>
          );
        })
      }
    </>
  );
}

export default SinglePlaylistTracks;