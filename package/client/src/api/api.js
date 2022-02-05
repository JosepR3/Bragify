import { makeRequest } from "./api-utils";
import axios from "axios";
function makeApi(request = makeRequest()) {

  function signUp(headers, data) {
    return request({
      url: "/sign-up",
      requestMethod: "POST",
      headers: headers,
      data: data
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

  function getAllTracks() {
    return request({
      url: "/get-tracks",
      requestMethod: "GET",
    });
  }


  function createTrack(headers, data) {
    return axios.post(
      "http://localhost:4000/tracks",
      data,
      { headers: headers }
    );
  }
  function deleteTrack(headers, data) {
    return axios.delete(
      `http://localhost:4000/tracks/${data}`,
      { headers: headers }
    )
  }
  function getUser({ headers }){
    return request({
      url:"/get-user",
      requestMethod: "GET",
      headers: headers
    })
  }

  return {
    signUp: signUp,
    signOut: signOut,
    editUser: editUser,
    getAllTracks: getAllTracks,
    deleteTrack: deleteTrack,
    createTrack: createTrack,
    getUser: getUser
  };
}


export default makeApi();
