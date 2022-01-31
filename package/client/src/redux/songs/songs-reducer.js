import initialState from "./songs-state"
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


export default function songsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SONGS:
            return {
                ...state,
                status: "idle",
                error: undefined,
                isPlaying: false,

            }
        case SONGS_SET_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case SONGS_SET_RESULT:
            return {
                ...state,
                result: action.payload,
            }
        case SONGS_RESET:
            return {
            }
        case SONGS_LOADING:
            return {
                ...state,
                status: "loading",
            }
        case SONGS_LOADING_SUCCESS:
            return {
                ...state,
                status: "success",
            }
        case PLAY_TRACK:
            return {
                ...state,
                isPlaying: true,
                playingTrack: action.payload,
            }
        default:
            return state
    }

} 