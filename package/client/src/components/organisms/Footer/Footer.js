import React from "react";

import MusicPlayer from "../../molecules/MusicPlayer/MusicPlayer"
import CurrentPlaying from "../../molecules/CurrentPlaying"

export default function Footer(){
  return(
    <footer className="d-flex flex-wrap fixed-bottom footer justify-content-between p-1">
      <CurrentPlaying />
      <div className="container container__player">
        <MusicPlayer />
      </div>
      <div className="w-25">
        ...
      </div>
    </footer>
  );
}

