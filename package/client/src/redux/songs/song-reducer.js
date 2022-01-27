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
            }
        case SONGS_SET_ERROR:
            return {
            }
        case SONGS_SET_RESULT:
            return {
            }
        case SONGS_RESET:
            return {
            }
        case SONGS_LOADING:
            return {
            }
        default:
            return state
    }

}