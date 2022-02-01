import axios from "axios";
const cors = require("cors")

const BASE_URL = 'apollo.eu-west-3.elasticbeanstalk.com/'

export async function getAllPlayLists() {
    const url = 'http://apollo.eu-west-3.elasticbeanstalk.com/api/playlists'
    const response = await axios.get(url, { headers: { 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZXJnaSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NDM3NDAyMjd9.uEGzsjwoD_zssBsiC0IPcHPOAZZhrIP2OatVtYHeWrYcBVwvl9Gz245ERPgnzm2LFPSU7mCpqEdWKn1xGdTDdQ' } })
    return response.data;
}

const audio = new Audio
audio.addEventListener('ended', () => {
    updateAudio()
})



export async function playSong(url) {
    audio.src = url
    audio.play()

}

export async function pauseSong() {
    audio.pause()

}