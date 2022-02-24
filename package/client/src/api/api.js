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
    return axios.post("https://bragify.herokuapp.com/tracks", data, {
      headers: headers,
    });
  }

  function deleteTrack(headers, data) {
    return axios.delete(`https://bragify.herokuapp.com/tracks/${data}`, {
      headers: headers,
    });
  }

  function likeTrack(headers, data) {
    return axios.put(
      `https://bragify.herokuapp.com/tracks/${data.track}/like`,
      data,
      { headers: headers },
    );
  }

  function fetchPlaylistById(headers, data) {
    return request({
      url: "/playlist/" + data,
      requestMethod: "GET",
      headers: headers,
    });
  }

  function fetchTrackById(headers, data) {
    return request({
      url: "/track/" + data,
      requestMethod: "GET",
      headers: headers,
    });
  }

  function unlikeTrack(headers, data) {
    return axios.put(
      `https://bragify.herokuapp.com/${data.track}/unlike`,
      data,
      { headers: headers },
    );
  }

  function fetchLikedTracks(headers, userId) {
    return axios.get(`https://bragify.herokuapp.com/tracks/${userId}/liked`, {
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
    return axios.delete(`https://bragify.herokuapp.com/playlist/${data}`, {
      headers: headers,
    });
  }

  function addToList(headers, data) {
    return axios.put(
      `https://bragify.herokuapp.com/${data.playListId}/add-playlist`,
      data,
      { headers: headers },
    );
  }
  function removeTrackPlaylist(headers, data) {
    return axios.put(
      `https://bragify.herokuapp.com/${data.playlist}/remove-playlist`,
      data,
      {
      headers: headers,
    });
  }

  return {
    signUp: signUp,
    signOut: signOut,
    editUser: editUser,
    getAllTracks: getAllTracks,
    fetchTrackById: fetchTrackById,
    deleteTrack: deleteTrack,
    createTrack: createTrack,
    getUser: getUser,
    likeTrack: likeTrack,
    unlikeTrack: unlikeTrack,
    fetchLikedTracks: fetchLikedTracks,
    createPlaylist: createPlaylist,
    fetchAllPlaylists: fetchAllPlaylists,
    fetchPlaylistById: fetchPlaylistById,
    addToList: addToList,
    deletePlaylist: deletePlaylist,
    removeTrackPlaylist: removeTrackPlaylist
  };
}

export default makeApi();
