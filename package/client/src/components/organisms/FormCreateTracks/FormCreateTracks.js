import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTrack } from '../../../redux/tracks/tracks-actions';
import { getCurrentUserUid } from "../../../services/auth";
import Button from "react-bootstrap/Button";
import Container from '@mui/material/Container';
import Form from "react-bootstrap/Form";

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
                <Form.Label>Title</Form.Label>
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
                    <Form.Label>Author of Track</Form.Label>
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
                    <Form.Label>Select genre</Form.Label>
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
                <Form.Group >
                    <Form.Label>Select genre</Form.Label>
                    <Form.Control
                        type="file"
                        value={track.url}
                        onChange={handleInput}
                        name="url"
                        accept=".mp3"
                    />
                </Form.Group>
                {/* <Form.Group className="mb-2">
                <Form.Label>Thumbnail</Form.Label>
                <Form.Control
                    type="file"
                    value={track.thumbnail}
                    onChange={handleInput}
                    name="thumbnail"
                    accept=".jpg"
                // required
                />
            </Form.Group> */}
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




