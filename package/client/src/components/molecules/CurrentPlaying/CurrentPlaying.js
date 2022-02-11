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
      <Card.Img
        src={trackId?.data?.thumbnail}
        className="current__img"
      />
      <Card.Body>
        <Card.Title className="pl__card-title m-0">
        {trackId?.data?.title}
        </Card.Title>
        <Card.Subtitle className="pl__card-subtitle m-0">
          Some quick example text to build on the card title and make up the
          bulk of the content.
        </Card.Subtitle>
        <div className="cp__options">
          <button className="btn__options mx-1">
            <BsSuitHeart />
          </button>
          <button className="btn__options mx-1">
            <FiMoreHorizontal />
          </button>
        </div>
      </Card.Body>
    </Card>
  )
}

