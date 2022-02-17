import React, {  useState} from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { nextTrack, previousTrack} from "../../../redux/playlists/playlists-actions";

export default function MusicPlayer() {
  const playlistTracksUrl = useSelector((state) => state.playlists?.playlistTracksUrl);
  const index = useSelector((state) => state.playlists?.nextTrackState)
  const [number, setNumber] = useState(0);
  const tracksToPlay = playlistTracksUrl
  const dispatch = useDispatch()

  function handleClickPrevious() {
    
    if (index ===0) {
      setNumber(0);
      dispatch(previousTrack(0));
    }
    else{
      setNumber(number - 1);
      dispatch(previousTrack(number - 1))
    }
   
  }
  
  function handleClickNext() {
      if (index === playlistTracksUrl?.length-1){
        setNumber(0);
      dispatch(nextTrack(0))
    }else{
      setNumber(number + 1);
      dispatch(nextTrack(number+1))
    }
  }
  function handleClickOnend() {
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
      onEnded={handleClickOnend}
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
