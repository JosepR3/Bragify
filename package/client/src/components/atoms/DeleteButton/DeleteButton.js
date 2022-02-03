import React from 'react';
import { useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';

import { deleteTrack } from '../../../redux/tracks/tracks-actions';

// Please find a testing example of this button at components/organisms/TrackSongsList/TrackSongsList.js
export default function DeleteButton({ id }) {
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        dispatch(deleteTrack(e.target.id));
        console.log(e.target.id);
    }

    return <Button variant="danger" data-test-id="delete-button" id={id} onClick={handleDelete} s />;
}
