import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTrack } from '../../../redux/tracks/tracks-actions';
import { getCurrentUserUid } from "../../../services/auth";
import Button from "react-bootstrap/Button";
import Container from '@mui/material/Container';
import Form from "react-bootstrap/Form";
import mp3Icon from "../../../assets/images/mp3.svg";
import imgIcon from "../../../assets/images/img.png";


const FormCreateTracks = () => {

    const dispatch = useDispatch();
    const [errors, setErrors] = useState({})
    const [track, setTrack] = useState({
        title: "",
        url: "",
        author: "",
        thumbnail: "",
        duration: 0,
        genre: "",
        authorId: getCurrentUserUid()
    });
    const findFormErrors = () => {
        const { title, url, author, thumbnail, duration, genre } = track
        const newErrors = {}
        if (!title || title === '') newErrors.title = 'can not be blank!'
        else if (title.length > 10) newErrors.title = 'title is too long!'
        if (!author || author === '') newErrors.author = 'can not be blank!'
        else if (author.author > 10) newErrors.author = 'Name author  is too long!'
        if (!genre || genre === '') newErrors.genre = 'select a genre!'
        if (!url || url === '') newErrors.url = 'insert MP3 file!'
        if (!thumbnail || thumbnail === '') newErrors.thumbnail = 'insert JPG file!'

        // if (!duration || duration > 5 || duration < 1) newErrors.duration = 'must assign a duration between 1 and 5!'
        return newErrors
    }

    const handleSubmit = e => {
        e.preventDefault()
        const newErrors = findFormErrors()
        console.log(newErrors);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
        } else {
            console.log(track);
            dispatch(createTrack(track));
        }
    }

    function handleInput(e) {
        const { target } = e;
        const { name, value } = target;

        const newTrack = {
            ...track,
            [name]: value,
        };
        setTrack(newTrack);
    }


    return (<>
        <Container className="form__background-color"maxWidth="sm">
            <Form className="px-4" onSubmit={handleSubmit}>
                <Form.Label className='text-light'>Title</Form.Label>
                <Form.Control
                    type='text'
                    name="title"
                    placeholder="Title Track"
                    onChange={handleInput}
                    isInvalid={!!errors.title}
                />
                <Form.Control.Feedback type='invalid'>
                    {errors.title}
                </Form.Control.Feedback>
                <Form.Group>
                    <Form.Label className='text-light'>Author of Track</Form.Label>
                    <Form.Control
                        type="text"
                        name="author"
                        placeholder="Author"
                        onChange={handleInput}
                        isInvalid={!!errors.title}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.author}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicSelect">
                    <Form.Label className='text-light'>Select genre</Form.Label>
                    <Form.Control
                        as="select"
                        name="genre"
                        onChange={handleInput}
                        isInvalid={!!errors.genre}
                    >
                        <option value="Rock">Rock</option>
                        <option value="Pop">Pop</option>
                        <option value="Salsa">Salsa</option>
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>
                        {errors.genre}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>----------
                        <img
                            className=" me-2"
                            src={mp3Icon}
                            alt="fb-mp3"
                        ></img>
                    <Form.Control
                        style={{display:"none"}}
                        type="file"
                        name="url"
                        onChange={handleInput}
                            accept=".mp3"
                            isInvalid={!!errors.url}
                    />
                    </Form.Label>
                </Form.Group>
                    <p className='text-light fs-6'> Insert mp3 file</p>
                    <Form.Control.Feedback type='invalid'>
                        {errors.url}
                    </Form.Control.Feedback>
                <Form.Group>
                    <Form.Label>
                        <img
                            className="me-2 img_icon"
                            src={imgIcon}
                            alt="img-icon"
                        ></img>
                        <Form.Control
                            style={{ display: "none" }}
                            type="file"
                            name="thumbnail"
                            onChange={handleInput}
                            accept=".jpg"
                            isInvalid={!!errors.thumbnail}
                        />
                    </Form.Label>
                    <p className='text-light fs-6'> Insert img</p>
                </Form.Group>
                <Form.Control.Feedback type='invalid'>
                    {errors.thumbnail}
                </Form.Control.Feedback>
                <Button
                    className="my-4 w-100 custom_btn"
                    type="submit"
                >
                    Create Track
                </Button>
            </Form>
        </Container>
    </>);
}
export default FormCreateTracks;




