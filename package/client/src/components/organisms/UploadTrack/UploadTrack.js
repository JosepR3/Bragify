import axios from 'axios';
import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { createTrack } from '../../../redux/tracks/tracks-actions';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {getCurrentUserUid} from "../../../services/auth";
import withLayout from '../../HOC/withLayout';

const UploadTrack = () => {
    const [link,setLink]=useState("")

    const dispatch = useDispatch();
    
    const [track, settrack] = useState({
        title: "",
        link: "",
        thumbnail: "",
        duration: 0,
        genre: "",
        authorId:getCurrentUserUid()
    });

        function uploadImage(files) {
            const formData = new FormData();
            formData.append("file", files[0]);
            formData.append("upload_preset", "d8nsvm8g");
            axios.post("https://api.cloudinary.com/v1_1/drjrc7z28/image/upload", formData).then((res) => {
                setLink(res.data.secure_url);
            }).then(console.log(link));
        }

    function uploadTrack(files) {
        console.log(files)
        const formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", "d8nsvm8g");
        axios.post("https://api.cloudinary.com/v1_1/drjrc7z28/video/upload", formData).then((res) => {
            setLink(res.data.secure_url);
        }).then(console.log(link));
    }
    function handleInput(e) {
        const { target } = e;
        const { name, value } = target;

        const newTrack = {
            ...track,
            [name]: value,
        };
        settrack(newTrack);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(createTrack(track));
    }


    return (<>
        <Form className="px-4" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    className="mb-2"
                    name="title"
                    type="text"
                    placeholder="Title Track"
                    value={track.title}
                    onChange={handleInput}
                    // required
                />
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Title Track</Form.Label>
                <Form.Control
                    type="file"
                    value={track.url}
                    onChange={(e) => { uploadTrack(e.target.files) }}
                    name="url"
                    accept=".mp3"
                    // required
                />
            </Form.Group>
            <Form.Group controlId="formBasicSelect">
                <Form.Label>Select genre</Form.Label>
                <Form.Control
                    as="select"
                    value={track.genre}
                    onChange={handleInput}
                    name="genre"
                    
                >
                    <option value="Rock">Rock</option>
                    <option value="Pop">Pop</option>
                    <option value="Salsa">Salsa</option>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Thumbnail</Form.Label>
                <Form.Control
                    type="file"
                    value={track.link}
                    onChange={(e) => { uploadImage(e.target.files) }}
                    name="thumbnail"
                    accept=".jpg"
                    // required
                />
            </Form.Group>
            <Button
                className="my-4 w-100"
                type="submit"
                variant="log-color"
            >
                Create Track
            </Button>
        </Form>
    </>);
}
export default withLayout(UploadTrack);




