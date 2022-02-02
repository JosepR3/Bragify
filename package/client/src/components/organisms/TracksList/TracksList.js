import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllTracks } from "../../../redux/tracks/tracks-actions";
import ListGroup from "react-bootstrap/ListGroup";
import "./trackList.scss";
import { tracksSelector } from "../../../redux/tracks/tracks-selector";

export default function TracksList() {
  // const error = useSelector(state => state.tracks.error);
  // const status = useSelector(state => state.tracks.status);

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
            </ListGroup>
          );
        })}
    </div>
  );
}

//
//   </ul>
// </div>
// );
// }
