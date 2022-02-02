import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './MusicPlayer.scss';

// https://www.npmjs.com/package/react-h5-audio-player
export default function MusicPlayer() {

    const songTrack = useSelector(state => state.songs.playingTrack);
    const songsToPlay = songTrack.track

    const [number, setNumber] = useState(0);

    function handleClickPrevious() {
        setNumber(number - 1);
        if (number === 0) {
            setNumber(songsToPlay.length - 1);
        }
    }

    function handleClickNext() {
        setNumber(number + 1);
        if (number === songsToPlay.length - 1) {
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
            header={songsToPlay && songsToPlay[number].name}
            src={songsToPlay && songsToPlay[number].url}
            className='music-player'
            timeFormat='auto'
            hasDefaultKeyBindings={true}
            footer={songsToPlay && songsToPlay[number].owner.firstName ? songsToPlay[number].owner.firstName + " " + songsToPlay[number].owner.lastName : "Enjoy the song!"}
            onError={(e) => {
                console.log(e);
            }}
            onPlayError={(e) => {
                console.log(e);
            }}
        />
    );
}


