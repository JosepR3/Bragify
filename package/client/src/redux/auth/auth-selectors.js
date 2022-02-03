import { createSelector } from "reselect";

export const selectAuthState = (state) => state.auth;
export const selectTrackState = (state) => state.track;
export const authSelector = createSelector([selectAuthState], (auth) => auth);
export const trackSelector = createSelector([selectTrackState], (track) => track);

