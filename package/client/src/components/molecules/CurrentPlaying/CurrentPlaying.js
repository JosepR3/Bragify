import React from "react";

import Card from "react-bootstrap/Card";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";

export default function CurrentPlaying(){
  return(
    <Card className="d-flex flex-row h-100 w-25 p-1">
        <Card.Img
          src="https://ih1.redbubble.net/image.1138204235.9642/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"
          className="current__img"
        />
      <Card.Body>
        <Card.Title className="pl__card-title m-0">
          Card Title a really long titile for example blabla
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

