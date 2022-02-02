import { getAllPlayLists } from "../../api/mock-apis";
import api from "../../api";
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

} from "./tracks-types";

function setTracksLoading() {
  return { type: TRACKS_LOADING };
}

function setTracksLoadingSuccess() {
  return { type: TRACKS_LOADING_SUCCESS };
}

function setTracksResult(result) {
   return { type: TRACKS_SET_RESULT, payload: result };
}

function setTracksError(error) {
  return { type: TRACKS_SET_ERROR, payload: error };
}

function setPlayingTracks(track, index) {
  return {
    type: PLAY_TRACK,
    payload: { track, index },
  };
}

function setPauseTracks() {
  return { type: PAUSE_TRACK };
}

export function playTrack(track) {
  return {
    type: PLAY_TRACK,
    payload: { track },
  };
}

function giveLike(id) {}

function getMyTracks(currentUser) {}

function createTracks(data) {}

function editTracks(id) {}

function deleteTracks(id) {}

export async function fetchAllTracks(dispatch) {
  try {
    const userToken = await getCurrentUserToken()
    if (!userToken) {
      return dispatch(signOutSuccess());
    }
    console.log("inside fetch")
    const res = await api.getAllTracks({
      headers:
        {Authorization: `Bearer ${userToken}`}
    });
    
   return dispatch(setTracksResult(res.data.data));

    // if (res.errorMessage) {
    //   return dispatch(fetchTracksError(res.errorMessage));
    // }
  } catch (err) {
    // return dispatch(fetchTracksError(err));
  }
}
