import initialState from "./tracks-state";
import {
  FETCH_TRACKS,
  TRACKS_SET_ERROR,
  TRACKS_SET_RESULT,
  TRACKS_RESET,
  TRACKS_LOADING,
  TRACKS_LOADING_SUCCESS,
  PLAY_TRACK,
  TO_TRACKS,
  LIKE_TRACK,
  LIKE_TRACKS,
  DELETE_TRACK,
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
    case TO_TRACKS:
      return {
        ...state,
        inTracks: true,
        isEditing: false,
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

    case LIKE_TRACKS: {
      const likedTracksList = action.payload;
      return {
        ...state,
        likedTracksList: likedTracksList,
      };
    }

    case DELETE_TRACK: {
      const trackId = action.payload;
      const deletedTrack = state.tracks.find((track) => track._id === trackId);
      const tracks = state.tracks.filter((track) => track._id !== trackId);
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
