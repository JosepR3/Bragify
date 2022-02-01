import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';

// import 'react-h5-audio-player/lib/styles.css';
import 'react-h5-audio-player/src/styles.scss';
import './MusicPlayer.scss';
import { fetchAllSongs } from '../../../redux/songs/songs-actions';

// https://www.npmjs.com/package/react-h5-audio-player
export default function MusicPlayer() {

    const songTrack = useSelector(state => state.songs.playingTrack);
    console.log(songTrack);
    console.log(songTrack.track)
    console.log(songTrack.track[0])
    console.log(songTrack.track[0].url)

    const songsToPlay = songTrack.track

    const [number, setNumber] = useState(0);
    const dispatch = useDispatch();

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
            header={songsToPlay[number].name + " - " + songsToPlay[number].owner.firstName + " " + songsToPlay[number].owner.lastName}
            src={songTrack && songsToPlay[number].url}
            className='music-player'
        />
    )
}

