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


    case PlaylistTypes.GET_DATA_TRACK: {
      return {
        ...state,
        playPlaylist: action.payload ,
        playlistData:[ action.payload]
      };
    }
    case PlaylistTypes.GET_PLAYLIST_TRACK: {
      return {
        ...state,
        playPlaylist: action.payload,
        playlistTracksUrl: [action.payload]
      };
    }

    case PlaylistTypes.GET_PLAYLIST_SUCCESS: {
      const playlistTracks = action.payload.tracks.map((i)=> i.url)
      const trackData = action.payload.tracks.map((item) => {
        return {
          image: item.thumbnail,
          name: item.name,
          artist: item.artists,
          genre: item.genre,
          url:item.url
        }
      })

      return {
        ...state,
        isSuccess: true,
        playlist: action.payload,
        playlistTracksUrl: playlistTracks,
        playlistData: trackData
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
