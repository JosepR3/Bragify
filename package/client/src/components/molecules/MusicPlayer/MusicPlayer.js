import React, { useState } from 'react';
// import { useSelector } from 'react-redux';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

export default function MusicPlayer() {

    const tracksToPlay = ["https://res.cloudinary.com/dv1gu7nub/video/upload/v1618299312/Apollofy/Songs/Superstition_zyuldq.mp3"]
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
        <AudioPlayer
            // autoPlay
            autoPlayAfterSrcChange={true}
            showSkipControls={true}
            showJumpControls={false}
            onClickPrevious={handleClickPrevious}
            onClickNext={handleClickNext}
            onEnded={handleClickNext}
            src={tracksToPlay && tracksToPlay[number]}
            timeFormat='auto'
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


