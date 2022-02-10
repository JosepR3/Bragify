import { createSelector } from "reselect";

export const selectPlaylistState = (state) => state.playlistsReducer;

export const playlistStateSelector = createSelector([selectPlaylistState],(playlistsReducer) => playlistsReducer);
