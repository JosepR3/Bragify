import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllTracks } from "../../../redux/tracks/tracks-actions";


import { tracksSelector } from "../../../redux/tracks/tracks-selector";

export default function TracksList() {
  // const error = useSelector(state => state.tracks.error);
  // const status = useSelector(state => state.tracks.status);

  const dispatch = useDispatch();

    const { tracks} = useSelector(tracksSelector);

  return (
    <div>
      hello from TracksList! Please, find the tracks of the album you selected
      are below:
      <br />
      <br />
      <a href="/">return to home</a>
      <br />
      <br />
      <ul>
  
        {tracks && tracks.map((track) => {
          return (
            <li key={track._id}>
              {track.title} <button>LIKE</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
