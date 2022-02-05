import React from "react";
import { useSelector } from "react-redux";
import SingleAlbum from "../../components/organisms/SingleAlbum";
// import { fetchAllAlbums } from "../../redux/tracks/tracks-actions";
// import PlaylistsSelector from "../../redux/playlists/playlists-selector";
import TrackList from "../../components/molecules/TrackList/TrackList";
import "./playlists.scss";
// import {getAllAlbums} from "../../redux/tracks/tracks-actions"
import { createSelector } from "reselect";

export const selectPlaylistsState = (state) => state.playlists;

export const PlaylistsSelector = createSelector(
  [selectPlaylistsState],
  (playlists) => playlists,
);

export default function Playlists() {
  const inSingleAlbum = useSelector(PlaylistsSelector);
  return (
    <>
      <div className="playLists_container">
        {inSingleAlbum && <SingleAlbum />}
        <TrackList />
      </div>
    </>
  );
}
