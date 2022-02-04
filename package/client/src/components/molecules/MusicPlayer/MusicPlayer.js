import { useState } from 'react';
import { useSelector } from 'react-redux';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './MusicPlayer.scss';
// import useTimer from '../../../hooks/useTimer';

// https://www.npmjs.com/package/react-h5-audio-player
export default function MusicPlayer() {

    const trackTrack = useSelector(state => state.tracks.playingTrack);
    // const { runTimer } = useTimer()
    const tracksToPlay = trackTrack.track
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
            className='music-player'
            timeFormat='auto'
            hasDefaultKeyBindings={true}
            footer={tracksToPlay && tracksToPlay[number].owner.firstName ? tracksToPlay[number].owner.firstName + " " + tracksToPlay[number].owner.lastName : "Enjoy the song!"}
            onError={(e) => {
                console.log(e);
            }}
            onPlayError={(e) => {
                console.log(e);
            }}
        />
    );
}


