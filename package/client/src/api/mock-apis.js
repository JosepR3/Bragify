import axios from "axios";
import { setTracksError } from "../redux/tracks/tracks-actions";

const BASE_URL = 'http://apollo.eu-west-3.elasticbeanstalk.com/'

export async function getAllPlayLists() {
    const url = `${BASE_URL}api/playlists`;
    const response = await axios.get(url, { headers: { 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZXJnaSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NDM4MzIxNjd9.bRWTZdvHOsvIdd5I9doX8VlpHMOS5kgydJ-wc_nI4sa7lgKhKNPTBbpW3pPayhQ9INU6m-e4Ov0FkkoR8Qhsnw' } }).catch(error => {
        console.log(error);
        setTracksError(error);
    });

    return response.data;
}


export async function asyncLikeSong(id) {
    const url = `${BASE_URL}api/tracks/${id}/like`;
    console.log(url);
    const response = await axios.get(url, { headers: { 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZXJnaSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NDM4MzIxNjd9.bRWTZdvHOsvIdd5I9doX8VlpHMOS5kgydJ-wc_nI4sa7lgKhKNPTBbpW3pPayhQ9INU6m-e4Ov0FkkoR8Qhsnw' } }).catch(error => {
        console.log(error);

        setTracksError(error);
    });
    console.log(response)
    return response.data;
}



// export async function playTrack(url) {
//     audio.src = url
//     audio.play()
// }


//     export async function pauseTrack() {
//         audio.pause()
//     }

