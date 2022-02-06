import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import TrackList from "../../components/molecules/TrackList/TrackList";
import "./playlists.scss";
import { createSelector } from "reselect";

export const selectPlaylistsState = (state) => state.playlists;

export const PlaylistsSelector = createSelector(
  [selectPlaylistsState],
  (playlists) => playlists,
);

export default function Playlists() {
  const location = useLocation();
  return (
    <>
      <div className="playLists_container">
        {location.pathname === "/playlists" && <TrackList />}
        {location.pathname === "/playlists/single-album" && <Outlet/>}
      </div>
    </>
  );
}
