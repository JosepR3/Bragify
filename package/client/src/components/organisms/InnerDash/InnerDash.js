import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SongCarrousel from '../../../components/molecules/SongCarrousel';
import './InnerDash.scss';
import { fetchAllSongs } from '../../../redux/songs/songs-actions';

export default function InnerDash() {
    const songs = useSelector(state => state.songs.result);
    const error = useSelector(state => state.songs.error);
    const status = useSelector(state => state.songs.status);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchAllSongs());

        console.log(status)
    }, []);
    return <div >
        {console.log(songs)}
        <h3>Trending</h3>
        {status === "loading" && <p>Loading...</p>}
        {status === "success" && <SongCarrousel />}
        {error === true && <p>{error}</p>}
        <h3>Popular Playlists</h3>
        {status === "loading" && <p>Loading...</p>}
        {status === "success" && <SongCarrousel />}
        {error === true && <p>{error}</p>}
        <h3>Popular Artists</h3>
        {status === "loading" && <p>Loading...</p>}
        {status === "success" && <SongCarrousel />}
        {error === true && <p>{error}</p>}
        <h3>Followed Playlists</h3>
        {status === "loading" && <p>Loading...</p>}
        {status === "success" && <SongCarrousel />}
        {error === true && <p>{error}</p>}
    </div>;
}
