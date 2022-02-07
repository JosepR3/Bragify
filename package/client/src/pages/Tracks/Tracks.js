import { useEffect, React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tracksSelector } from "../../redux/tracks/tracks-selector";
import { fetchAllTracks } from "../../redux/tracks/tracks-actions";

import ListGroup from "react-bootstrap/ListGroup";

import DeleteButton from "../../components/atoms/DeleteButton";
import LikeButton from "../../components/atoms/LikeButton";



export default function Tracks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTracks);
  }, [dispatch]);

  const { tracks } = useSelector(tracksSelector);

  return (
    <div className="container">
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
              <ListGroup.Item className="list_item">
                {/* <img>{track.thumbnail}</img> */}
                {track.title}
              </ListGroup.Item>
              <ListGroup.Item className="list_item">
                {track.artists}
              </ListGroup.Item>
              <ListGroup.Item className="list_item">
                {track.genre}
              </ListGroup.Item>
              <ListGroup.Item className="list_item">
                {track.duration}
              </ListGroup.Item>
              <LikeButton trackId={track._id} />
              <DeleteButton id={track._id} />
            </ListGroup>
          );
        })}
    </div>
  );
}
