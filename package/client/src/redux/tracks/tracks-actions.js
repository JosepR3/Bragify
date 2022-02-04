import api from "../../api";
import * as auth from "../../services/auth";
import { getCurrentUserToken } from "../../services/auth";
import * as TrackTypes from "./tracks-types";

export function setTracksLoading() {
  return { type: TrackTypes.TRACKS_LOADING };
}
export function toTracks() {
  return { type: TrackTypes.TO_TRACKS };
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
  return {  type: TrackTypes.PAUSE_TRACK };
}

export function playTrack(track) {
  return {
    type: TrackTypes.PLAY_TRACK,
    payload: { track },
  };
}

export function createTrack(data) {
  return async function createThunk(dispatch) {
    try {
      dispatch(authTrack(api.createTrack, data));
    } catch (error) {
      console.log(error, "createTrackError");
    }
  };
}

export function deleteTrack(id) {
  return async function createThunk(dispatch) {
    try {
      dispatch(authTrack(api.deleteTrack, id));
      return result;
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
    console.log(error, "deleteTrackError");
  }
}

export function authTrack(action, data) {
  return async function createThunk(dispatch) {
    const token = await auth.getCurrentUserToken();
    const response = await action(
      {
        Authorization: `Bearer ${token}`,
      },
      data,
    );
  };
}
