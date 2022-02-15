import initialState from "./tracks-state";
import {
  FETCH_TRACKS,
  TRACKS_SET_ERROR,
  TRACKS_SET_RESULT,
  TRACKS_RESET,
  TRACKS_LOADING,
  TRACKS_LOADING_SUCCESS,
  PLAY_TRACK,
  LIKE_TRACK,
  LIKE_TRACKS,
  DELETE_TRACK,
  GET_TRACK_SUCCESS,

} from "./tracks-types";

export default function tracksReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRACKS:
      return {
        ...state,
        status: "idle",
        error: undefined,
        isPlaying: false,
      };
    case TRACKS_SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case TRACKS_SET_RESULT:
      return {
        ...state,
        tracks: action.payload,
      };
    case TRACKS_RESET:
      return {};
    case TRACKS_LOADING:
      return {
        ...state,
        status: "loading",
      };
    case TRACKS_LOADING_SUCCESS:
      return {
        ...state,
        status: "success",
      };

    case PLAY_TRACK:
      return {
        ...state,
        isPlaying: true,
        playingTrack: action.payload,
      };

    case LIKE_TRACK: {
      const id = action.payload;
      if (state.likedTracksList.find((track) => track._id === id)) {
        const likedTracks = state.likedTracksList.filter((track) => track._id !== id);
        return {
          ...state,
          likedTracksList: [...likedTracks],
        };
      } else {
        const likedTracks = state.likedTracksList.filter((track) => track._id !== id);
        const newlikedTrack = state.tracks.find((track) => track._id === id);
        likedTracks.push(newlikedTrack);
        return {
          ...state,
          likedTracksList: [...likedTracks],
        };
      }
    }

    case GET_TRACK_SUCCESS: {
      localStorage.setItem("trackURL", action.payload.url);
      return {
        ...state,
        track: [...state.track, action.payload],
        trackURL: [...state.trackURL, action.payload.url],

      };
    }

    case LIKE_TRACKS: {
      const likedTracksList = action.payload;
      return {
        ...state,
        likedTracksList: likedTracksList,
      };
    }

    case DELETE_TRACK: {
      const track = action.payload;
      const deletedTrack = state.tracks.find((track) => track._id === track);
      const tracks = state.tracks.filter((track) => track._id !== track);
      const deletesuccess = "DELETE_SUCCESS"
      return {
        ...state,
        tracks,
        status: deletesuccess,
        deletedTrack,
      };
    }
    default:
      return state;
  }
}
