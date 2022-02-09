import React from "react";
import { useDispatch } from "react-redux";
import { deletePlaylist } from "../../../redux/playlists/playlists-actions";
import Button from "react-bootstrap/Button";

import deleteIcon from '../../../assets/images/delete.svg';
export default function DeletePlaylistButton({ id }) {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deletePlaylist(id));
    }

    return <Button variant="danger" data-test-id="delete-button" id={id} onClick={handleDelete} >
        <img src={deleteIcon} />
    </Button>;
}
