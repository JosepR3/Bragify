import * as PlaylistsTypes from "./playlists-types";
import api from "../../api";
import { getCurrentUserToken, getCurrentUserUid } from "../../services/auth";

export function createPlaylistRequest() {
  return { type: PlaylistsTypes.CREATE_PLAYLIST_REQUEST };
}

export function createPlaylistSuccess() {
  return { type: PlaylistsTypes.CREATE_PLAYLIST_SUCCESS };
}

export function setPlaylistsResult(result) {
  return { type: PlaylistsTypes.SET_PLAYLISTS_RESULT, payload: result };
}

export function createPlaylist(data) {
  return async function createThunk(dispatch) {
    const token = await getCurrentUserToken();
    dispatch(createPlaylistRequest());

    const body = {
      name: data.name,
      description: data.description,
      thumbnail: data.thumbnail,
      authorId: getCurrentUserUid(),
    };
    await api.createPlaylist({
      headers: { Authorization: `Bearer ${token}` },
      body: body,
    });
    dispatch(createPlaylistSuccess());
  };
}

// export function deletePlaylist(data) {
//   return async function createThunk(dispatch) {
//     try {
//       dispatch(api.createPlaylist, data);
//     } catch (error) {
//       console.log(error, "createPlaylistError");
//     }
//   };
// }

export function deletePlaylist(id) {
  return async function createThunk(dispatch) {
    try {
      dispatch(playlistAuth(api.deletePlaylist,
        id));
    } catch (error) {
      console.log(error, "deleteTrackError");
    }
  };
}

export function playlistAuth(action, data) {
  return async function createThunk() {
    const token = await getCurrentUserToken();
    const response = await action(
      {
        Authorization: `Bearer ${token}`,
      },
      data,
    );
    return response.data;
  };
}

export async function fetchAllPlaylists(dispatch) {
  try {
    const userToken = await getCurrentUserToken();
    const res = await api.fetchAllPlaylists({
      headers: { Authorization: `Bearer ${userToken}` },
    });

    return dispatch(setPlaylistsResult(res.data.data), console.log(res.data.data));

  } catch (error) {
    console.log(error, "fetch Playlists error");
  }
}

// export function updatePlaylist(playlist) {
//   return async function updatePlaylistThunk(dispatch) {
//     dispatch(playlistUpdateRequest());

//     const res = await api.updatePlaylist(playlist);

//     if (res.isSuccessful) {
//       dispatch(playlistUpdateSuccess(res.data));
//     } else {
//       dispatch(playlistUpdateError(res.errorMessage));
//     }
//   };
// }

// export function fetchPlaylistById(data) {

// }
