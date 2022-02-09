import { createSelector } from "reselect";

export const selectCloudinaryState= (state) => state.tracks;

export const cloudinarySelector = createSelector(
  [selectCloudinaryState],
  (cloudinary) => cloudinary,
);