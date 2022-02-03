import React from 'react';
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';

import { deleteTrack } from '../../../redux/tracks/tracks-actions';

// Please find a testing example of this button at components/organisms/TrackSongsList/TrackSongsList.js
export default function DeleteButton({ id }) {
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        dispatch(deleteTrack(e.target.id));
        console.log(e.target.id);
    }

    return <BsFillTrashFill data-test-id="delete-button" color="#ffebee" id={id} onClick={handleDelete} class="bi bi-trash" />;
}
