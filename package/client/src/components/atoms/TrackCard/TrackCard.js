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
        src="https://store-032.blobstore.apple.com/sq-mq-us-032-000002/dc/21/3b/dc213b08-221b-0777-32df-87ee8c9a812a/image?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220203T151716Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=MKIAJC19DXS75RV205ZP%2F20220203%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8c6c557d11ad2a393e249e2a6a7b249bed93e46db820d172fbdd3b16a945e233"
        >
        </Card.Img>
        <Card.Body className="flex-column d-flex justify-content-center">
        <div className="d-flex gap-3 justify-content-between">
        <button variant="primary" className="track_card_container_button">▶</button>
        </div>
        <Card.Title className="fs-5 mt-2">Song</Card.Title>
        <Card.Text className="fs-6">Album</Card.Text>
        </Card.Body>
    </Card>
    );
}
