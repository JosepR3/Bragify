import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './MusicPlayer.scss';

// https://www.npmjs.com/package/react-h5-audio-player
export default function MusicPlayer({ trackList = ["https://res.cloudinary.com/dv1gu7nub/video/upload/v1618299312/Apollofy/Songs/Superstition_zyuldq.mp3"], title = "Track Title", artist = "Artist Name" }) {

    const tracksToPlay = trackList
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
            autoPlay
            autoPlayAfterSrcChange={true}
            showSkipControls={true}
            showJumpControls={false}
            onClickPrevious={handleClickPrevious}
            onClickNext={handleClickNext}
            onEnded={handleClickNext}
            header={title}
            src={tracksToPlay && tracksToPlay[number]}
            className='music-player'
            timeFormat='auto'
            hasDefaultKeyBindings={true}
            footer={artist || "Enjoy the song!"}
            onError={(e) => {
                console.log(e);
            }}
            onPlayError={(e) => {
                console.log(e);
            }}
        />
    );
}


