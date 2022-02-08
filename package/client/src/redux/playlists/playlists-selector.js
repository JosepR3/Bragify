import { createSelector } from "reselect";

export const selectPlaylistState = (state) => state.playlists;

export const playlistStateSelector = createSelector(
  [selectPlaylistState],
  (playlistState) => playlistState,
);
