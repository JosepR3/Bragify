import axios from "axios";
const cors = require("cors")

const BASE_URL = 'apollo.eu-west-3.elasticbeanstalk.com/'

export async function getAllPlayLists() {
    const url = 'http://apollo.eu-west-3.elasticbeanstalk.com/api/playlists'
    const response = await axios.get(url, { headers: { 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZXJnaSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NDM2NDUzMDR9.S4rjk8T9_PnXGSJA8myYTwaO7ypVj7RNCF8dMYLRwKpraJL8okCXBi1i_lUVWiAE_A4ZLNDfJHN_8CadSmu21A' } })
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