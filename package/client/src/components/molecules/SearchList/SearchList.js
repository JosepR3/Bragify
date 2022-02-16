import React from 'react'

import { useSelector } from "react-redux";

export default function SearchList() {

    const searchArray = useSelector((state) => state.searchReducer.results)


    return (
        <>
            {searchArray && <div>
                {searchArray.tracks ? searchArray.tracks.length > 0 && <ul>Tracks
                    {searchArray.tracks[0].map((track) => <li key={track._id}>
                        {track.title}
                    </li>
                    )}
                </ul> : <p>No tracks found</p>}
                {searchArray.playlists ? searchArray.playlists.length > 0 && <ul>Playlists
                    {searchArray.playlists[0].map((playlist) => <li key={playlist.authorId}>
                        {playlist.name}
                    </li>
                    )}
                </ul> : <p>No playlists found</p>}
            </div>})
        </>
    )
}
