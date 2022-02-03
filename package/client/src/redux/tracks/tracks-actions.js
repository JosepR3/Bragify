
import api from "../../api"
import * as auth from "../../services/auth";
import { getCurrentUserToken } from "../../services/auth";
import {
  FETCH_TRACKS,
  TRACKS_SET_ERROR,
  TRACKS_SET_RESULT,
  TRACKS_RESET,
  TRACKS_LOADING,
  TRACKS_LOADING_SUCCESS,
  PLAY_TRACK,
  PAUSE_TRACK,
  STOP_TRACK,
  TO_TRACKS
} from "./tracks-types";


export function setTracksLoading() {
    return { type: TRACKS_LOADING };
    
}
export function toTracks() {
  return { type: TO_TRACKS };
}
export function setTracksLoadingSuccess() {
    return { type: TRACKS_LOADING_SUCCESS };
    
}

export function setTracksResult(result) {
    return { type: TRACKS_SET_RESULT, payload: result };
}

export function setTracksError(error) {
    return { type: TRACKS_SET_ERROR, payload: error };
}

export function setPlayingTracks(track, index) {
    return {
        type: PLAY_TRACK, payload: { track, index }
    };
}

export function setPauseTracks() {
    return { type: PAUSE_TRACK };
    
}

export function playTrack(track) {
    return {
        type: PLAY_TRACK, payload: { track }
    }
    
}

export function createTrack(data) {
    return async function createThunk(dispatch) {
        try {
            dispatch(authTrack(api.createTrack, data));
        } catch (error) {
            console.log(error, "createTrackError")
        }
    };
}


export function deleteTrack(id) {
    return async function createThunk(dispatch) {
        try {
            dispatch(authTrack(api.deleteTrack,id));
            return result;
        } catch (error) {
            console.log(error, "deleteTrackError")
        }
    }
}





export async function fetchAllTracks(dispatch) {
  try {
    const userToken = await getCurrentUserToken();
    if (!userToken) {
      return dispatch(signOutSuccess());
    }
    const res = await api.getAllTracks({
      headers: { Authorization: `Bearer ${userToken}` },
    });

    return dispatch(setTracksResult(res.data.data));

  } catch (err) {
    console.log(error, "deleteTrackError")
  }
}

export function authTrack(action, data) {
    return async function createThunk(dispatch) {
        const token = await auth.getCurrentUserToken();
        const response = await action({
            Authorization: `Bearer ${token}`
        },data)
    }
}
