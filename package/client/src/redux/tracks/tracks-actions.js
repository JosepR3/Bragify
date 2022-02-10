// import * as auth from "../../services/auth";
import * as TrackTypes from "./tracks-types";
import api from "../../api";
import { getCurrentUserToken } from "../../services/auth";

export function setTracksLoading() {
  return { type: TrackTypes.TRACKS_LOADING };
}

export function setTracksLoadingSuccess() {
  return { type: TrackTypes.TRACKS_LOADING_SUCCESS };
}

export function setTracksResult(result) {
  return { type: TrackTypes.TRACKS_SET_RESULT, payload: result };
}

export function setTracksError(error) {
  return { type: TrackTypes.TRACKS_SET_ERROR, payload: error };
}

export function setPlayingTracks(track, index) {
  return {
    type: TrackTypes.PLAY_TRACK,
    payload: { track, index },
  };
}

export function setPauseTracks() {
  return { type: TrackTypes.PAUSE_TRACK };
}

export function setLikedTracks(likedTracks) {
  return {
    type: TrackTypes.LIKE_TRACKS,
    payload:  likedTracks ,
  };
}

export function setLikeTrack(id) {
  return {
    type: TrackTypes.LIKE_TRACK,
    payload: id,
  };
}

export function playTrack(track) {
  return {
    type: TrackTypes.PLAY_TRACK,
    payload: { track },
  };
}


// track CRUD functions
export function createTrack(data) {
  return async function createThunk(dispatch) {
    try {
      dispatch(authTrack(api.createTrack, data));
    } catch (error) {
      console.log(error, "createTrackError");
    }
  };
}

export function updateTrack(id) {
  return {
    type: TrackTypes.DELETE_TRACK,
    payload: id,
  }
}
export function deleteTrack(id) {
  return async function createThunk(dispatch) {
    try {
      console.log(id);
      dispatch(authTrack(api.deleteTrack, id));
      dispatch(updateTrack(id));

    } catch (error) {
      console.log(error, "deleteTrackError");
    }
  };
}

export async function fetchAllTracks(dispatch) {
  try {
    const userToken = await getCurrentUserToken();
    const res = await api.getAllTracks({
      headers: { Authorization: `Bearer ${userToken}` },
    });
    return dispatch(setTracksResult(res.data.data));
  } catch (error) {
    console.log(error, "fetcherror");
  }
}


// like button actions

export function likeTrack(id, userId) {
  const data = { trackId: id, userId: userId };
  return async function createThunk(dispatch) {
    try {
      await dispatch(authTrack(api.likeTrack, data));
      dispatch(setLikeTrack(id));
    } catch (error) {
      console.log(error, "likeTrackError");
    }
  };
}

export function unlikeTrack(id, userId) {
  const data = { trackId: id, userId: userId };
  return async function createThunk(dispatch) {
    try {
      await dispatch(authTrack(api.unlikeTrack, data));
      dispatch(setLikeTrack(id));
    } catch (error) {
      console.log(error, "unlikeTrackError");
    }
  };
}

export function fetchLikedTracks(userId) {
  return async function createThunk(dispatch) {
    try {
      const res = await dispatch(authTrack(api.fetchLikedTracks, userId));
      dispatch(setLikedTracks(res.data));
    } catch (error) {
      console.log(error, "fetchLikedTracksError");
    }
  };
}

//auth function
export function authTrack(action, data) {
  return async function createThunk() {
    const token = await getCurrentUserToken();
    const response = await action(
      {
        Authorization: `Bearer ${token}`,
      },
      data,
    );
    return response.data;
  };
}

