import { getAllPlayLists  } from "../../api/mock-apis";
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
import api from "../../api"
import * as auth from "../../services/auth";



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

// export function giveLike(id) {
    //     try {
        //         const result = asyncLikeSong(id);
        //         console.log(id)
        //         return result;
        //     } catch (error) {
            //         console.log(error);
            //     }
            
            // }
            
            // export function getMyTracks(currentUser) {
                
            // }
            
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

export function authTrack(action, data) {
    return async function createThunk(dispatch) {
        const token = await auth.getCurrentUserToken();
        const response = await action({
            Authorization: `Bearer ${token}`
        },data)
    }
}
