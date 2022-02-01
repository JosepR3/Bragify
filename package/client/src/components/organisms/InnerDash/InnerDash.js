import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TrackCarrousel from '../../../components/molecules/TrackCarrousel';
import MusicPlayer from '../../molecules/MusicPlayer';
import './InnerDash.scss';
import { fetchAllTracks } from '../../../redux/tracks/tracks-actions';
import EditUserForm from '../EditUserForm';

export default function InnerDash() {
    const tracks = useSelector(state => state.tracks.result);
    const tracks = useSelector(state => state.tracks.playingTrack);
    const error = useSelector(state => state.tracks.error);
    const status = useSelector(state => state.tracks.status);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllTracks());
    }, []);

    return <div >
        <h3>Trending</h3>
        {status === "loading" && <p>Loading...</p>}
        {status === "success" && <TrackCarrousel />}
        {error === true && <p>{error}</p>}
        <h3>Popular Playlists</h3>
        {status === "loading" && <p>Loading...</p>}
        {status === "success" && <TrackCarrousel />}
        {error === true && <p>{error}</p>}
        <h3>Popular Artists</h3>
        {status === "loading" && <p>Loading...</p>}
        {status === "success" && <TrackCarrousel />}
        {error === true && <p>{error}</p>}
        <h3>Followed Playlists</h3>
        {status === "loading" && <p>Loading...</p>}
        {status === "success" && <TrackCarrousel />}
        {error === true && <p>{error}</p>}
        <br />
        <br />

        {tracks && <MusicPlayer />}
    </div>;
}
