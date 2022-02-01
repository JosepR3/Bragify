import { makeRequest } from "./api-utils";

function makeApi(request = makeRequest()) {
  function signUp(headers, data) {
    return request({
      url: "/sign-up",
      requestMethod: "POST",
      headers: headers,
      data: data
    })
  }

  function signOut(headers) {
    return request({
      url: "/sign-out",
      requestMethod: "POST",
      headers: headers,
    });
  }


  function update(headers, data) {
    // console.log(data);
    return request({
      url: "/me",
      requestMethod: "PATCH",
      headers: headers,
    })
  }

  return {
    signUp: signUp,
    signOut: signOut,
    update,update
  };
}

export default makeApi();
