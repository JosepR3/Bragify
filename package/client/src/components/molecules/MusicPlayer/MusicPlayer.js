import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';

// import 'react-h5-audio-player/lib/styles.css';
import 'react-h5-audio-player/src/styles.scss';
import './MusicPlayer.scss';



// https://www.npmjs.com/package/react-h5-audio-player
export default function MusicPlayer() {

    const songTrack = useSelector(state => state.playingTrack);

    console.log(songTrack)
    const [number, setNumber] = useState(0);

    function handleClickPrevious() {
        setNumber(number - 1);
    }

    function handleClickNext() {
        setNumber(number + 1);
    }

    useEffect(() => {
        console.log(songTrack)
    }, [songTrack]);


    return <AudioPlayer
        autoPlay
        autoPlayAfterSrcChange={true}
        showSkipControls={true}
        showJumpControls={false}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        src={songTrack && songTrack[number].url}
    // other props here
    />;
}

