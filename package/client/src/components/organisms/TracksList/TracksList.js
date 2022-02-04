import React from "react";
import { useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
// import "./trackList.scss";
import { tracksSelector } from "../../../redux/tracks/tracks-selector";
import DeleteButton from "../../atoms/DeleteButton/DeleteButton";

export default function TracksList() {

  const { tracks } = useSelector(tracksSelector);

  return (
    <div>
      <ListGroup
        horizontal
        className="list-row w-100 d-flex justify-content-center"
      >
        <ListGroup.Item className="list_item_titles">Track</ListGroup.Item>
        <ListGroup.Item className="list_item_titles">Artist</ListGroup.Item>
        <ListGroup.Item className="list_item_titles">Genre</ListGroup.Item>
        <ListGroup.Item className="list_item_titles">Duration</ListGroup.Item>
      </ListGroup>

      {tracks &&
        tracks.map((track) => {
          return (
            <ListGroup
              horizontal
              className="list-row w-100 d-flex justify-content-center"
              key={track._id}
            >
              <ListGroup.Item  className="list_item">
                {track.title}
              </ListGroup.Item>
              <ListGroup.Item className="list_item">
                {track.artists}
              </ListGroup.Item>
              <ListGroup.Item  className="list_item">
                {track.genre}
              </ListGroup.Item>
              <ListGroup.Item  className="list_item">
                {track.duration}
              </ListGroup.Item>
              <DeleteButton id={track._id}/>
            </ListGroup>
          );
        })}
    </div>
  );
}

