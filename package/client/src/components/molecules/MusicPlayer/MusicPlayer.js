import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';

// import 'react-h5-audio-player/lib/styles.css';
import 'react-h5-audio-player/src/styles.scss';
import './MusicPlayer.scss';
import useTimer from '../../../hooks/useTimer';
import { fetchAllTracks } from '../../../redux/tracks/tracks-actions';

// https://www.npmjs.com/package/react-h5-audio-player
export default function MusicPlayer() {

    const trackTrack = useSelector(state => state.tracks.playingTrack);
    const { runTimer } = useTimer()
    console.log(trackTrack);
    console.log(trackTrack.track)
    console.log(trackTrack.track[0])
    console.log(trackTrack.track[0].url)

    const tracksToPlay = trackTrack.track

    const [number, setNumber] = useState(0);
    const dispatch = useDispatch();

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

    return <div>
        {console.log(trackTrack[0])}
        <AudioPlayer
            autoPlay
            autoPlayAfterSrcChange={true}
            showSkipControls={true}
            showJumpControls={false}
            onClickPrevious={handleClickPrevious}
            onClickNext={handleClickNext}
            onEnded={handleClickNext}
            header={tracksToPlay[number].name + " - " + tracksToPlay[number].owner.firstName + " " + tracksToPlay[number].owner.lastName}
            src={trackTrack && tracksToPlay[number].url}

        // other props here
        />;
    </div>

}

