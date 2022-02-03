import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
// LIKE SONGS
export default function TracksList() {
    // const tracks = useSelector(state => state.tracks.result);
    const tracks = ["Gasoline", "In the Morning", "Faded", "Take my breath" ]
    // const error = useSelector(state => state.tracks.error);
    // const status = useSelector(state => state.tracks.status);
    // const dispatch = useDispatch();
    useEffect(() => {
        console.log(tracks)
    }, [tracks[0]]);
    return <div>hello from TracksList! Please, find the tracks of the album you selected are below:
        <br />
        <br />
        <a href="/">return to home</a>
        <br />
        <br />
        <ul>
            {console.log(tracks)}
            {tracks.map((track) => {
                return <li >{track} <button>LIKE</button><DeleteButton id="61fba6ccaa614993c073292a"/></li>
            })}
        </ul>

    </div>;

}
