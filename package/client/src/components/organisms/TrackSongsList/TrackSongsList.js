import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MusicPlayer from '../../molecules/MusicPlayer'
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
import { giveLike, deleteTrack } from '../../../redux/tracks/tracks-actions';
import withLayout from '../../HOC/withLayout';
// LIKE SONGS
function TrackSongsList() {


    const songTrack = useSelector(state => state.tracks.playingTrack);
    const songsToPlay = songTrack.track
    const error = useSelector(state => state.tracks.error);
    const status = useSelector(state => state.tracks.status);

    const dispatch = useDispatch();

    const handlePlay = (e) => {

    }
    const handleDelete = (e) => {
        dispatch(deleteTrack(e.target.id));
    }
    const handleLike = (e) => {
        dispatch(giveLike(e.target.id));
        console.log(e.target.id);
    }

    return <div>hello from SongList! Please, find the songs of the album you selected are below:
        <br />
        <br />
        <a href="/">return to home</a>
        <br />
        <br />
        <ul>
            {console.log(songsToPlay)}
            {songsToPlay.map((song, index) => {
                return <li
                    key={song.id}>{song.name}
                    <button id={song.id} onClick={handleLike}>LIKE</button>
                    <PlayArrowSharpIcon style={{ fill: "white" }} onClick={handlePlay} id="play-button" />
                    <button id={song.id} onClick={handleDelete}>DELETE</button>
                </li>
            })}
        </ul>
        <MusicPlayer />

    </div>;

}

export default withLayout(TrackSongsList);