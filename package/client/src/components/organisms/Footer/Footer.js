import React from "react";

import MusicPlayer from "../../molecules/MusicPlayer"

export default function Footer(){
  return(
    <footer className="fixed-bottom footer">
      <div className="text-white">
        Current Song
      </div>
      <div className="text-white">
        <MusicPlayer />
      </div>
    </footer>
  );
}

