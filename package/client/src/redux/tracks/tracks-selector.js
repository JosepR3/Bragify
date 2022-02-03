import { createSelector } from "reselect";

export const selectTracksState = (state) => state.tracks;

export const tracksSelector = createSelector(
  [selectTracksState],
  (tracks) => tracks,
);
