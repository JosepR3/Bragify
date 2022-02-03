import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// import { playSong } from '../../../api/mock-apis';
// import { pauseSong } from '../../../api/mock-apis';

// import { playTrack } from '../../../redux/tracks/tracks-actions';

import "./TrackCard.scss";

export default function TrackCard() {
  // { albumName,
  // artistName,
  // tracks,
  // albumImageUrl }
  // const theme = useTheme();
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // // const tracks = useSelector(state => state.tracks);
  // // const { currentTrack } = tracks;
  // // const { currentTrack } = tracks;
  // const [isPlaying, setIsPlaying] = useState(false);

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
    <Card className="track_card_container justify-content-center rounded">
        <Card.Img
        className="track_card_container_image"
        variant="top"
        src="https://images.pexels.com/photos/9420580/pexels-photo-9420580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        >
        </Card.Img>
        <Card.Body className="flex-column d-flex justify-content-center">
        <div className="d-flex gap-3 justify-content-between">
        <button variant="primary" className="track_card_container_button">▶</button>
        </div>
        <Card.Title className="fs-5">Song</Card.Title>
        <Card.Text className="fs-6">Album</Card.Text>
        </Card.Body>
    </Card>
    );
}
