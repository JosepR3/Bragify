import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import withLayout from "../../components/HOC/withLayout";
import TrackList from "../../components/molecules/TrackList/TrackList";
import { createSelector } from "reselect";

export const selectPlaylistsState = (state) => state.playlists;

export const PlaylistsSelector = createSelector(
  [selectPlaylistsState],
  (playlists) => playlists,
);

function Playlists() {
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

export default withLayout(Playlists)
