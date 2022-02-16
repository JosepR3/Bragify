import React, {  useState} from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
// import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

export default function MusicPlayer() {
  const  playlistTracksUrl = useSelector((state) => state.playlists?.playlistTracksUrl);

  const [number, setNumber] = useState(0);
  const tracksToPlay = playlistTracksUrl

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
