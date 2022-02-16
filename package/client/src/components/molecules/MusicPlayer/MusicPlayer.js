import React, { useState, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
import { useSelector, useDispatch } from "react-redux";
// import { tracksSelector } from "../../../redux/tracks/tracks-selector";
import { playlistsSelector } from "../../../redux/playlists/playlists-selector";
import { fetchPlaylistById } from "../../../redux/playlists/playlists-actions";

export default function MusicPlayer() {
  const dispatch = useDispatch();
  const path = window.location.pathname.split("/");
  const id = path.slice(-1);
  // const { trackURL } = useSelector(tracksSelector);
  
  useEffect(() => {
    dispatch(fetchPlaylistById(id[0]));
  }, [dispatch]);


  const  playlistTracksUrl = useSelector((state) => state.playlists?.playlistTracksUrl);
  console.log(playlistTracksUrl);

  const [number, setNumber] = useState(0);
  const tracksToPlay = d


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
