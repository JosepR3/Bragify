import { makeRequest } from "./api-utils";

function makeApi(request = makeRequest()) {
  console.log("makeapiiii")
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

  return {
    signUp: signUp,
    signOut: signOut,
  };
}

export default makeApi();
