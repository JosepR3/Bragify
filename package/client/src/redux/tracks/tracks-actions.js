import { getAllPlayLists } from "../../api/mock-apis";
import {
    FETCH_TRACKS,
    TRACKS_SET_ERROR,
    TRACKS_SET_RESULT,
    TRACKS_RESET,
    TRACKS_LOADING,
    TRACKS_LOADING_SUCCESS,
    PAUSE_TRACK,
    STOP_TRACK,
    PLAY_TRACK,
} from "./tracks-types"


export function setTracksLoading() {
    return { type: TRACKS_LOADING };

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

export function giveLike(id) {

}

export function getMyTracks(currentUser) {

}

export function createTracks(data) {

}

function editTracks(id) {

}

export function deleteTracks(id) {

}

export function fetchAllTracks() {
    return async (dispatch) => {
        dispatch(setTracksLoading());
        try {
            const result = await getAllPlayLists();
            dispatch(setTracksResult(result));
            dispatch(setTracksLoadingSuccess());
        } catch (error) {
            dispatch(setTracksError(error));
        }
    };
} 