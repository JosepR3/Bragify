import axios from "axios";
const cors = require("cors");
const BASE_URL = 'apollo.eu-west-3.elasticbeanstalk.com/'



export function createDefaultResponse() {
  return {
    isSuccessful: false,
    data: null,
    errorMessage: null,
  };
}

export async function normalizeResponse(promise = Promise.resolve) {
  const defaultResponse = createDefaultResponse();
  let networkResponse = null;

  try {
    networkResponse = await promise;
    defaultResponse.data = networkResponse.data;
  } catch (error) {
    defaultResponse.errorMessage = error.message;
  }

  return defaultResponse;
}

export function makeRequest(
  httpClient = axios,
  baseURL = process.env.REACT_APP_API_BASE_URL,
  baseHeaders = {
    Accept: "application/json",
  },
) {
  return async function request({
    url = "/",
    requestMethod = "GET",
    body = {},
    headers = {},
  }) {
    return normalizeResponse(
      httpClient({
        url: baseURL + url,
        method: requestMethod,
        data: body,
        headers: {
          ...baseHeaders,
          ...headers,
        },
        validateStatus: function validateStatus(status) {
          // Resolve only if the status code is in the 200 range
          return status >= 200 && status < 400;
        },
      }),
    );
  };
}

// export async function getAllPlayLists() {
//   const url = 'http://apollo.eu-west-3.elasticbeanstalk.com/api/playlists'
//   try {
//     const response = await axios.get()({
//       url: url,
//       requestMethod: "GET",
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZXJnaSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NDM0OTMwNTh9.CaidrpdgLW_G9c0toMl3Dy3bjrJ5sIVIlSC3SxQxfCIzTH5PEaFT5yqMj8uesZfTncG-PsYDn0n1JJnwZ5hfDQ'
//       },

//     })
//   }
//   catch (error) {
//     console.log(error)
//   }
//   return response.data;
// }

export async function getAllPlayLists() {
  const url = 'http://apollo.eu-west-3.elasticbeanstalk.com/api/playlists'
  const response = await axios.get(url, { headers: { 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZXJnaSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NDM0OTMwNTh9.CaidrpdgLW_G9c0toMl3Dy3bjrJ5sIVIlSC3SxQxfCIzTH5PEaFT5yqMj8uesZfTncG-PsYDn0n1JJnwZ5hfDQ' } })
  return response.data;
}