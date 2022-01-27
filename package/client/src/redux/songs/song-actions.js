import {
    FETCH_SONGS,
    SONGS_SET_ERROR,
    SONGS_SET_RESULT,
    SONGS_RESET,
    SONGS_LOADING,
} from "./song-types"



function setSongsLoading() {
    return { type: SONGS_LOADING };
}

function setSongsResult(result) {
    return { type: SONGS_SET_RESULT, payload: result };
}

function setSongsError(error) {
    return { type: SONGS_SET_ERROR, payload: error };
}

function giveLike(id) {

}

function loadMySongs(currentUser) {

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
            const result = await getAllSongs();
            dispatch(setSongsResult(result));
        } catch (error) {
            dispatch(setSongsError(error));
        }
    };
}