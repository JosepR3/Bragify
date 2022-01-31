import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// LIKE SONGS
export default function TrackSongsList() {
    const songs = useSelector(state => state.songs.result);
    const error = useSelector(state => state.songs.error);
    const status = useSelector(state => state.songs.status);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(songs)
    }, [songs[0]]);
    return <div>hello from SongList! Please, find the songs of the album you selected are below:
        <br />
        <br />
        <a href="/">return to home</a>
        <br />
        <br />
        <ul>
            {console.log(songs)}
            {songs[0].tracks.map((song, index) => {
                return <li key={index}>{song.name} <button>LIKE</button></li>
            })}
        </ul>

    </div>;

}
