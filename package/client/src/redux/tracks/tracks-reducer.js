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
      if (state.likedTracks.find((track) => track === id)) {
        const likedTracks = state.likedTracks.filter((track) => track !== id);
        return {
          ...state,
          likedTracks: [...likedTracks],
        };
      } else {
        const likedTracks = state.likedTracks.filter((track) => track !== id);
        likedTracks.push(id);
        return {
          ...state,
          likedTracks: [...likedTracks],
        };
      }
    }

    case GET_TRACK_SUCCESS: {
      localStorage.setItem("trackURL", action.payload.data.url);
      let trackURL = localStorage.getItem("trackURL");
      return {
        ...state,
        trackId: action.payload,
        trackURL: trackURL,
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
      const trackId = action.payload;
      const tracks = state.tracks.filter((track) => track._id !== trackId);
      return {
        ...state,
        tracks,
      };
    }
    default:
      return state;
  }
}
