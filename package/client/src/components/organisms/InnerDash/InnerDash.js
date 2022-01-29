import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SongCarrousel from '../../../components/molecules/SongCarrousel';
import './InnerDash.scss';
import { fetchAllSongs } from '../../../redux/songs/song-actions';

export default function InnerDash() {
    const songs = useSelector(state => state.songs.result);
    const error = useSelector(state => state.songs.error);
    const status = useSelector(state => state.songs.status);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchAllSongs());
        console.log(songs)
    }, []);

    return <div >
        <h3>Trending</h3>
        {error ? <p>There has been an error</p> : <SongCarrousel albumName={songs[1].name} />}
        <h3>Popular Playlists</h3>
        {error ? <p>There has been an error</p> : <SongCarrousel />}
        <h3>Popular Artists</h3>
        {error ? <p>There has been an error</p> : <SongCarrousel />}
        <h3>Followed Playlists</h3>
        {error ? <p>There has been an error</p> : <SongCarrousel />}
    </div>;
}
