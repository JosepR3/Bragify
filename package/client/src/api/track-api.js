import axios from "axios";



function makeTrack() {
    function createTrack(headers, data) {
        console.log(data);
        // const {title,url,thumbnail,duration,genre,authorId}=data
        return axios.post(
            "http://localhost:4000/tracks",
            // "POST",
            data,
            {headers: headers}
        );
    }
        return {
            createTrack: createTrack,
        }
    }

export default makeTrack();
