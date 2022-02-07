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

    case PlaylistTypes.CREATE_PLAYLIST_SUCCESS: {
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};
export default playlistsReducer;
