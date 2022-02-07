import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";

import { RiPlayCircleFill } from "react-icons/ri"

import { playTrack } from "../../../redux/tracks/tracks-actions";


export default function TrackAlbumCard(
  {
    //   albumName,
    //   artistName,
    //   albumImageUrl,
  },
) {
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();
  //   const tracks = useSelector((state) => state.tracks);
  //   const { currentTrack } = tracks;
  //   const [isPlaying, setIsPlaying] = useState(false);

  // const handleClick = () => {

  //     dispatch(playTrack(tracks));

  // };

  // const viewTracks = (e) => {
  //     if (e.target.id !== 'pause-button' && e.target.id !== 'play-button' && e.target.id !== 'button-box') {
  //         navigate('/tracks');
  //         dispatch(playTrack(tracks));
  //         // navigate('/track-song-list');

  //     }
  // }

  return (
    <Card className="p-2 m-2">
      <div className="position-relative p-0">
        <Card.Img
          variant="top"
          src="https://ih1.redbubble.net/image.1138204235.9642/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"
        />
        <RiPlayCircleFill
          className="card__play position-absolute top-50 start-50 translate-middle"
        />
      </div>
      <Card.Body className="p-1 mt-2">
        <Card.Title className="m-0">
          Card Title a really long titile for example blabla
        </Card.Title>
        <Card.Subtitle className="m-0">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
