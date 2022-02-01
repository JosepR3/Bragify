import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SongCarrousel from '../../../components/molecules/SongCarrousel';
import './InnerDash.scss';
import { fetchAllSongs } from '../../../redux/songs/songs-actions';
import EditUserForm from '../EditUserForm';

export default function InnerDash() {
    const songs = useSelector(state => state.songs.result);
    const error = useSelector(state => state.songs.error);
    const status = useSelector(state => state.songs.status);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllSongs());
    }, []);

    return <div >
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
        <br />
        <br />

    </div>;
}
