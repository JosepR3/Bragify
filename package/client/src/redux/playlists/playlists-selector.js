import { createSelector } from "reselect";

export const selectPlaylistsState = (state) => state.playlists;

export const PlaylistsSelector = createSelector(
  [selectPlaylistsState],
  (playlists) => playlists,
);
