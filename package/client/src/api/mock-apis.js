import axios from "axios";
const cors = require("cors")

const BASE_URL = 'apollo.eu-west-3.elasticbeanstalk.com/'

export async function getAllPlayLists() {
    const url = 'http://apollo.eu-west-3.elasticbeanstalk.com/api/playlists'
    const response = await axios.get(url, { headers: { 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZXJnaSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NDM0OTMwNTh9.CaidrpdgLW_G9c0toMl3Dy3bjrJ5sIVIlSC3SxQxfCIzTH5PEaFT5yqMj8uesZfTncG-PsYDn0n1JJnwZ5hfDQ' } })
    return response.data;
} 