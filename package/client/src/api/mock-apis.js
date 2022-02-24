import axios from "axios";
import { setTracksError } from "../redux/tracks/tracks-actions";

const BASE_URL = "https://bragify.herokuapp.com/";

export async function getAllPlayLists() {
  const url = `${BASE_URL}api/playlists`;
  const response = await axios
    .get(url, {
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZXJnaSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NDM5MjAyMzh9.UBkrD9dNSrjhr66ebtCXQi85NUDUb-a8PJOfwzcHi0tflrgexiAv-D75nkmjB4ZRo1MZClDOl5OrfZMr-3sawQ",
      },
    })
    .catch((error) => {
      setTracksError(error);
    });

  return response.data;
}

export async function asyncLikeSong(id) {
  const url = `${BASE_URL}api/tracks/${id}/like`;
  const response = await axios
    .put(url, {
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZXJnaSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NDM5MjAyMzh9.UBkrD9dNSrjhr66ebtCXQi85NUDUb-a8PJOfwzcHi0tflrgexiAv-D75nkmjB4ZRo1MZClDOl5OrfZMr-3sawQ",
      },
    })
    .catch((error) => {
      setTracksError(error);
    });
  return response.data;
}

export async function asyncDeleteTrack(id) {
  const url = `https://bragify.herokuapp.com/tracks/${id}`;

  const response = await axios.delete(url).catch((error) => {
    setTracksError(error);
  });
  return response;
}
