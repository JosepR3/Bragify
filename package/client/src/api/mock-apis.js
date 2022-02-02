import axios from "axios";
import { setSongsError } from "../redux/songs/songs-actions";

const BASE_URL = 'http://apollo.eu-west-3.elasticbeanstalk.com/'

export async function getAllPlayLists() {
    const url = `${BASE_URL}api/playlists`;
    const response = await axios.get(url, { headers: { 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZXJnaSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NDM4MzIxNjd9.bRWTZdvHOsvIdd5I9doX8VlpHMOS5kgydJ-wc_nI4sa7lgKhKNPTBbpW3pPayhQ9INU6m-e4Ov0FkkoR8Qhsnw' } }).catch(error => {
        console.log(error);
        setSongsError(error);
    });

    return response.data;
}


export async function asyncLikeSong(id) {
    const url = `${BASE_URL}api/tracks/${id}/like`;
    const response = await axios.post(url, { headers: { 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZXJnaSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NDM4MzIxNjd9.bRWTZdvHOsvIdd5I9doX8VlpHMOS5kgydJ-wc_nI4sa7lgKhKNPTBbpW3pPayhQ9INU6m-e4Ov0FkkoR8Qhsnw' } }).catch(error => {
        console.log(error);
        setSongsError(error);
    });

    return response.data;

}

