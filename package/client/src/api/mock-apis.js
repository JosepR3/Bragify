import axios from "axios";
import { setTracksError } from "../redux/tracks/tracks-actions";

const BASE_URL = 'http://apollo.eu-west-3.elasticbeanstalk.com/'

export async function getAllPlayLists() {
    const url = `${BASE_URL}api/playlists`;
    const response = await axios.get(url, { headers: { 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZXJnaSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NDM5MjAyMzh9.UBkrD9dNSrjhr66ebtCXQi85NUDUb-a8PJOfwzcHi0tflrgexiAv-D75nkmjB4ZRo1MZClDOl5OrfZMr-3sawQ' } }).catch(error => {
        console.log(error);
        setTracksError(error);
    });

    return response.data;
}


export async function asyncLikeSong(id) {
    const url = `${BASE_URL}api/tracks/${id}/like`;
    console.log(url);
    const response = await axios.put(url, { headers: { 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZXJnaSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NDM5MjAyMzh9.UBkrD9dNSrjhr66ebtCXQi85NUDUb-a8PJOfwzcHi0tflrgexiAv-D75nkmjB4ZRo1MZClDOl5OrfZMr-3sawQ' } }).catch(error => {
        console.log(error);

        setTracksError(error);
    });
    console.log(response)
    return response.data;
}

export async function asyncDeleteTrack(id) {
    const url = `http://localhost:4000/tracks/${id}`;

    console.log(url);
    const response = await axios.delete(url, 
        { headers: { 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZXJnaSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NDM4MzIxNjd9.bRWTZdvHOsvIdd5I9doX8VlpHMOS5kgydJ-wc_nI4sa7lgKhKNPTBbpW3pPayhQ9INU6m-e4Ov0FkkoR8Qhsnw' } }).catch(error => {
        console.log(error);

        setTracksError(error);
    });
    console.log(response)
    return response.data;
}


