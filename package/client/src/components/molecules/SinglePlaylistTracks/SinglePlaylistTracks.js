import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tracksSelector } from "../../../redux/tracks/tracks-selector";
import { fetchTrackById } from "../../../redux/tracks/tracks-actions";

import LikeButton from "../../atoms/LikeButton";
import RemoveTrackPlaylist from "../../atoms/RemoveTrackPlaylist";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

import { BsPlusLg } from "react-icons/bs";
import { useParams } from "react-router-dom";

function SinglePlaylistTracks(){
  const dispatch = useDispatch();
  let { trackId } = useSelector(tracksSelector);
  const params = useParams()
  const currentPlaylistStr = localStorage.getItem('currentPlaylist')
  const currentPlaylist = currentPlaylistStr.split(',');
  useEffect(() => {
    currentPlaylist && currentPlaylist.map((track) => dispatch(fetchTrackById(track)))
  }, []);

  const handleTrackId = (e) => {
    console.log(e)
    // const id = e.target.id;
    // localStorage.setItem("trackId", id);
    // let trackId = localStorage.getItem("trackId");
    // dispatch(fetchTrackById(trackId));
  };

  

  return(
    <>
      {trackId &&
        trackId.map((track) => {
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
                <LikeButton trackId={track._id} />
                <RemoveTrackPlaylist trackId={track._id} playlistId={params.id}/>
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