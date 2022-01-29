import initialState from "./song-state"
import {
    FETCH_SONGS,
    SONGS_SET_ERROR,
    SONGS_SET_RESULT,
    SONGS_RESET,
    SONGS_LOADING,
} from "./song-types"


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
        default:
            return state
    }

}