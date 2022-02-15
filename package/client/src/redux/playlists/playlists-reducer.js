import playlistsState from "./playlists-state";
import * as PlaylistTypes from "./playlists-types";

const playlistsReducer = (state = playlistsState, action) => {
  switch (action.type) {

    case PlaylistTypes.CREATE_PLAYLIST_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case PlaylistTypes.SET_PLAYLISTS_RESULT: {
      return {
        ...state,
        playlists: action.payload,
      };
    }

    case PlaylistTypes.CREATE_PLAYLIST_SUCCESS: {
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    }

    case PlaylistTypes.GET_PLAYLIST_SUCCESS: {
      localStorage.setItem("currentPlaylist", action.payload.tracks);

      return {
        ...state,
        isSuccess: true,
        playlistId: action.payload
      };
    }

    case PlaylistTypes.ADD_TO_PLAYLIST_SUCCESS: {
      return {
      };
    }
    case PlaylistTypes.ADD_TO_PLAYLIST_ERROR: {
      return {
        ...state,
      };
    }
    case PlaylistTypes.REMOVE_TO_PLAYLIST_SUCCESS: {
      return {
        ...state,
      };
    }
    case PlaylistTypes.REMOVE_TO_PLAYLIST_ERROR: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
export default playlistsReducer;
