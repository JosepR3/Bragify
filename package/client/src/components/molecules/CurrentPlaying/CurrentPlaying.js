import React from "react";

import Card from "react-bootstrap/Card";
import { FiMoreHorizontal } from "react-icons/fi";
import { useSelector } from "react-redux";
import { tracksSelector } from "../../../redux/tracks/tracks-selector";
import LikeButton from "../../atoms/LikeButton";

export default function CurrentPlaying() {
  const { track } = useSelector(tracksSelector);
  const trackInfo = useSelector((state) => state.playlists?.playlistData)
  const urls = useSelector((state) => state.playlists?.playlistTracksUrl);
  let next = useSelector((state) => state.playlists?.nextTrackState)

  const TrackImage = trackInfo?.map((item) => {
    if (item.url === urls[next])
    return item
  });
  const dataTrackPlayer = TrackImage?.filter(item => item !== undefined);


  return (

    <Card className="d-flex flex-row h-100 w-25 p-1">
      {!track && (
        <Card.Img
          src=""
          className="current__img"
        />
      )}
      {track && (
        <Card.Img src={dataTrackPlayer && dataTrackPlayer[0]?.image} className="current__img" />
      )}
      <Card.Body>
        {!track && (
          <Card.Title className="pl__card-title h6 m-0">
            Nothing playing :(
          </Card.Title>
        )}
        {track && (
          <Card.Title className="pl__card-title m-0">
            {dataTrackPlayer && dataTrackPlayer[0]?.name}
          </Card.Title>
        )}

        <Card.Subtitle className="pl__card-subtitle m-0">
          {dataTrackPlayer && dataTrackPlayer[0]?.artist}
        </Card.Subtitle>
        {track && (
          <div className="cp__options">
              <LikeButton />
            <button className="btn__options mx-1">
              <FiMoreHorizontal />
            </button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
