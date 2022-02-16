import React from "react";

import Card from "react-bootstrap/Card";
import { BsSuitHeart } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { useSelector } from "react-redux";
import { tracksSelector } from "../../../redux/tracks/tracks-selector";

export default function CurrentPlaying() {
  const { track } = useSelector(tracksSelector);
  const imagesURL = useSelector(state => state);
  const listToMap = imagesURL?.playlists?.playlist?.tracks;


  const urls = useSelector((state) => state.playlists?.playlistTracksUrl);
  console.log(urls);

  const TrackImage = listToMap?.map((item) => {
    console.log(item);
    if (item.url === urls[0])
      return {
        image: item.thumbnail,
        name: item.name,
        artist: item.artists,
        genre: item.genre,
      };

  });

  console.log(TrackImage);

  const finalImage = TrackImage?.filter(item => item !== undefined);

  console.log(finalImage);

  return (

    <Card className="d-flex flex-row h-100 w-25 p-1">
      {!track && (
        <Card.Img
          src=""
          className="current__img"
        />
      )}
      {track && (
        <Card.Img src={finalImage && finalImage[0]?.image} className="current__img" />
      )}
      <Card.Body>
        {!track && (
          <Card.Title className="pl__card-title h6 m-0">
            Nothing playing :(
          </Card.Title>
        )}
        {track && (
          <Card.Title className="pl__card-title m-0">
            {finalImage && finalImage[0]?.name}
          </Card.Title>
        )}

        <Card.Subtitle className="pl__card-subtitle m-0">
          {finalImage && finalImage[0]?.artists}
        </Card.Subtitle>
        {track && (
          <div className="cp__options">
            <button className="btn__options mx-1">
              <BsSuitHeart />
            </button>
            <button className="btn__options mx-1">
              <FiMoreHorizontal />
            </button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
