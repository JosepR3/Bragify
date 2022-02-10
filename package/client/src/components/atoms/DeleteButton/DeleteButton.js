import React from "react";
import { useDispatch } from "react-redux";
import { deleteTrack } from "../../../redux/tracks/tracks-actions";
import Button from "react-bootstrap/Button";

import deleteIcon from '../../../assets/images/delete.svg';


export default function DeleteButton( {id} ) {
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        dispatch(deleteTrack(e.target.id));
    }

    return <Button variant="danger" data-test-id="delete-button" id={id} onClick={handleDelete} >
        <img src={deleteIcon} />
    </Button>;
}
