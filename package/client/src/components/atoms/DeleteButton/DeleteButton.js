import React from "react";
import { useDispatch } from "react-redux";
import { deleteTrack } from "../../../redux/tracks/tracks-actions";

import Button from "react-bootstrap/Button";

import { BsTrash } from "react-icons/bs"

export default function DeleteButton({ id }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
      dispatch(deleteTrack(id));
    }

  return (
    <Button className="btn__options" id={id} onClick={handleDelete} >
      <BsTrash />
    </Button>
    )
}