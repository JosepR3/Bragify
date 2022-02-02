import { getAllPlayLists, asyncLikeSong } from "../../api/mock-apis";

import {
    FETCH_SONGS,
    SONGS_SET_ERROR,
    SONGS_SET_RESULT,
    SONGS_RESET,
    SONGS_LOADING,
    SONGS_LOADING_SUCCESS,
    PLAY_SONG,
    PAUSE_SONG,
    STOP_SONG,
    PLAY_TRACK,
} from "./songs-types"


function setSongsLoading() {
    return { type: SONGS_LOADING };

}

function setSongsLoadingSuccess() {
    return { type: SONGS_LOADING_SUCCESS };

}

function setSongsResult(result) {
    return { type: SONGS_SET_RESULT, payload: result };
}

export function setSongsError(error) {
    return { type: SONGS_SET_ERROR, payload: error };
}

function setPlayingSong(track, index) {
    return {
        type: PLAY_SONG, payload: { track, index }
    };
}

export function playTrack(track) {
    return {
        type: PLAY_TRACK, payload: { track }
    }

}

export function giveLike(id) {
    try {
        const result = asyncLikeSong(id);
        console.log(id)
        return result;
    } catch (error) {
        console.log(error);
    }

}

function getMySongs(currentUser) {

}

function createSong(data) {

}

function editSong(id) {

}

function deleteSong(id) {

}

export function fetchAllSongs() {
    return async (dispatch) => {
        dispatch(setSongsLoading());
        try {
            const result = await getAllPlayLists();
            dispatch(setSongsResult(result));
            dispatch(setSongsLoadingSuccess());
        } catch (error) {
            dispatch(setSongsError(error));
        }
    };
}


