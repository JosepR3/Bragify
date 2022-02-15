import { createSelector } from "reselect";

export const selectPlaylistState = (state) => state.playlists;

export const playlistsSelector = createSelector([selectPlaylistState],(playlists) => playlists);
