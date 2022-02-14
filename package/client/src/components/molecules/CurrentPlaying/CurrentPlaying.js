import React from "react";

import Card from "react-bootstrap/Card";
import { BsSuitHeart } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { useSelector } from "react-redux";
import { tracksSelector } from "../../../redux/tracks/tracks-selector";
export default function CurrentPlaying() {
  const { trackId } = useSelector(tracksSelector);

  return (
    <Card className="d-flex flex-row h-100 w-25 p-1">
      {!trackId && (
        <Card.Img
          src="https://yt3.ggpht.com/Z9qS4J5wQZQQzNn6tW0NCbPcc_K_r8kbpqiOm2tT0YvLzs5FgjCiPoJSSBYqzIfcgIOhbM1K4A=s900-c-k-c0x00ffffff-no-rj"
          className="current__img"
        />
      )}
      {trackId && (
        <Card.Img src={trackId?.data?.thumbnail} className="current__img" />
      )}
      <Card.Body>
        {!trackId && (
          <Card.Title className="pl__card-title h6 m-0">
            Nothing playing :(
          </Card.Title>
        )}
        {trackId && (
          <Card.Title className="pl__card-title m-0">
            {trackId?.data?.title}
          </Card.Title>
        )}

        <Card.Subtitle className="pl__card-subtitle m-0">
          {trackId?.data?.artists}
        </Card.Subtitle>
        {trackId && (
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
