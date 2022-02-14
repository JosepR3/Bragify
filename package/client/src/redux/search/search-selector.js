import { createSelector } from "reselect";

export const selectPlaylistState = (state) => state.selectReducer;

export const playlistStateSelector = createSelector([selectPlaylistState], (selectReducer) => selectReducer);
