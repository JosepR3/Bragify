import { useState, React } from "react";
import { useSelector } from "react-redux";

import AudioPlayer from "react-h5-audio-player";

// import useTimer from '../../../hooks/useTimer';

export default function MusicPlayer() {
  const trackTrack = useSelector((state) => state.tracks.playingTrack);
  // const { runTimer } = useTimer()
  const tracksToPlay = trackTrack.track;
  // const songTrack = useSelector(state => state.songs.playingTrack);
  // const songsToPlay = songTrack.track

  const [number, setNumber] = useState(0);

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
    <div className="footer fixed-bottom">
      <AudioPlayer
        autoPlay
        autoPlayAfterSrcChange={true}
        showSkipControls={true}
        showJumpControls={false}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
        header={tracksToPlay && tracksToPlay[number].name}
        src={tracksToPlay && tracksToPlay[number].url}
        className="music-player fixed-bottom"
        timeFormat="auto"
        hasDefaultKeyBindings={true}
        onError={(e) => {
          console.log(e);
        }}
        onPlayError={(e) => {
          console.log(e);
        }}
      />
    </div>
  );
}
