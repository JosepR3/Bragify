import { makeRequest } from "./api-utils";

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


  return {
    signUp: signUp,
    signOut: signOut,
    editUser: editUser,
    getAllTracks: getAllTracks
  };
}

export default makeApi();
