import React from "react";
import { useSelector } from "react-redux";
import { playlistStateSelector } from "../../../redux/playlists/playlists-selector";

// React-BsBootstrap
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

// Icons
import { BsFillPlayFill, BsShuffle, BsSuitHeart } from "react-icons/bs"

function SinglePlaylistHeader() {

  const {playlistId} = useSelector(playlistStateSelector);

  return(
    <div className="w-100 h-100"
    style={{ 
      backgroundImage: `url(${playlistId?.thumbnail})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed"
    }}>
    
  <div className="spl__container flex-row d-flex gap-5" >
    <div className="spl__container-img mx-5" id="photo">
      <Image
        src={playlistId?.thumbnail}
        alt={playlistId?.name + ".img"}
        className="w-100 h-100"
      />
    </div>
    <div className="d-flex flex-column justify-content-center">
      <h2 className="spl__name">
        {playlistId?.name}
      </h2>
      <p className="brand_color">{playlistId?.description}</p>
      <p className="brand_color mt-3">Created by: {playlistId?.authorId}</p>
      <p className="brand_color">{playlistId?.numberSongs} Tracks</p>
      <div className="d-flex gap-2 flex-row mt-4">
        <Button className="spl__play me-3" variant="log-color"><BsFillPlayFill/>Play</Button>
        <Button className="btn__options-round m-0"><BsShuffle className="h-50 w-50"/></Button>
        <Button className="btn__options-round m-0"><BsSuitHeart className="h-50 w-50"/></Button>
      </div>
    </div>
  </div>
  </div>
  );
}

export default SinglePlaylistHeader;
