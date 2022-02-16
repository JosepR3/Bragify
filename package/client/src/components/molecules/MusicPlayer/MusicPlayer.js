import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
import { useSelector } from "react-redux";
import { tracksSelector } from "../../../redux/tracks/tracks-selector";

export default function MusicPlayer() {
  const { trackURL } = useSelector(tracksSelector);
  const tracksToPlay = trackURL;

  const [number, setNumber] = useState(0);

  tracksToPlay[number];

  function handleClickPrevious() {
    setNumber(number - 1);

    if (number === 0) {
      setNumber(tracksToPlay.length - 1);
    }
  }

  function handleClickNext() {
    setNumber(number + 1);

    if (number === tracksToPlay.length - 1) {
      setNumber(0);
    }
  }

  return (
    <AudioPlayer
      autoPlay={true}
      autoPlayAfterSrcChange={true}
      showSkipControls={true}
      showJumpControls={false}
      onClickPrevious={handleClickPrevious}
      onClickNext={handleClickNext}
      onEnded={handleClickNext}
      src={tracksToPlay && tracksToPlay[number]}
      timeFormat="auto"
      hasDefaultKeyBindings={true}
      onError={(e) => {
        console.log(e);
      }}
      onPlayError={(e) => {
        console.log(e);
      }}
    />
  );
}
