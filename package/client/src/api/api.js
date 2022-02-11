import { makeRequest } from "./api-utils";
import axios from "axios";

function makeApi(request = makeRequest()) {
  function signUp(headers, data) {
    return request({
      url: "/sign-up",
      requestMethod: "POST",
      headers: headers,
      data: data,
    });
  }

  function signOut(headers) {
    return request({
      url: "/sign-out",
      requestMethod: "POST",
      headers: headers,
    });
  }

  function editUser({ headers, body }) {
    return request({
      url: "/edit-user",
      requestMethod: "PUT",
      body: body,
      headers: headers,
    });
  }

  function getUser({ headers }) {
    return request({
      url: "/get-user",
      requestMethod: "GET",
      headers: headers,
    });
  }

  function getAllTracks(headers) {
    return request({
      url: "/tracks",
      requestMethod: "GET",
      headers: headers,
    });
  }

  function createTrack(headers, data) {
    return axios.post("http://localhost:4000/tracks", data, {
      headers: headers,
    });
  }

  function deleteTrack(headers, data) {
    return axios.delete(`http://localhost:4000/tracks/${data}`, {
      headers: headers,
    });
  }

  function likeTrack(headers, data) {
    return axios.put(
      `http://localhost:4000/tracks/${data.trackId}/like`,
      data,
      { headers: headers },
    );
  }

  function unlikeTrack(headers, data) {
    return axios.put(
      `http://localhost:4000/tracks/${data.trackId}/unlike`,
      data,
      { headers: headers },
    );
  }

  function fetchLikedTracks(headers, userId) {
    return axios.get(`http://localhost:4000/tracks/${userId}/liked`, {
      headers: headers,
    });
  }
  function fetchPlaylistById(headers, data) {
    return request({
      url: "/playlist/" + data,
      requestMethod: "GET",
      headers: headers,
    });
  }

  function createPlaylist({ headers, body }) {
    return request({
      url: "/playlists",
      requestMethod: "POST",
      body: body,
      headers: headers,
    });
  }

  function fetchAllPlaylists(headers) {
    return request({
      url: "/playlists",
      requestMethod: "GET",
      headers: headers,
    });
  }

  function deletePlaylist(headers, data) {
    return axios.delete(`http://localhost:4000/playlist/${data}`, {
      headers: headers,
    });
  }

  return {
    signUp: signUp,
    signOut: signOut,
    editUser: editUser,
    getAllTracks: getAllTracks,
    deleteTrack: deleteTrack,
    createTrack: createTrack,
    getUser: getUser,
    likeTrack: likeTrack,
    unlikeTrack: unlikeTrack,
    fetchLikedTracks: fetchLikedTracks,
    createPlaylist: createPlaylist,
    fetchAllPlaylists: fetchAllPlaylists,
    fetchPlaylistById: fetchPlaylistById,
    deletePlaylist: deletePlaylist
  };
}

export default makeApi();
