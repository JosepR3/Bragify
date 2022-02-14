import {
  SET_TRACK_REQUEST,
SET_TRACK_ERROR,
SET_TRACK_SUCCESS,
SET_IMAGE_REQUEST,
SET_IMAGE_ERROR,
SET_IMAGE_SUCCESS,} from "./cloudinary-types"

export const uploadTrackRequest = () => ({
  type: SET_TRACK_REQUEST,
});

export const uploadTrackError = (message) => ({
  type: SET_TRACK_ERROR,
  payload: message,
});

export const uploadTrackSuccess = (trackUrl) => ({
  type: SET_TRACK_SUCCESS,
  payload: trackUrl,
});

export const uploadImageRequest = () => ({
  type: SET_IMAGE_REQUEST,
});

export const uploadImageError = (message) => ({
  type: SET_IMAGE_ERROR,
  payload: message,
});

export const uploadImageSuccess = (imageUrl) => ({
  type: SET_IMAGE_SUCCESS,
  payload: imageUrl,
});

// export function uploadTrack() {
//   return async function uploadThunk(dispatch) {

//   };
// }

// export function uploadImage() {
//   return async function uploadImageThunk(dispatch) {


//   };
// }
