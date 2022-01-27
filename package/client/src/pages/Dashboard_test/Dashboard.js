import React from 'react';

import SongCarrousel from '../../components/molecules/SongCarrousel';
import SongControls from '../../components/molecules/SongControls';

export default function Dashboard() {

    return <div >
        <h3>Trending</h3>
        <SongCarrousel />
        <h3>Popular Playlists</h3>
        <SongCarrousel />
        <h3>Popular Artists</h3>
        <SongCarrousel />
        <h3>Followed Playlists</h3>
        <SongCarrousel />
        <SongControls />
    </div>;
}
