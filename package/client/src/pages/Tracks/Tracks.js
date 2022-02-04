import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { tracksSelector } from "../../redux/tracks/tracks-selector";
import { fetchAllTracks } from "../../redux/tracks/tracks-actions";

import DeleteButton from "../../components/atoms/DeleteButton";

import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

import "./tracks.scss";


export default function Tracks() {
  
  const dispatch = useDispatch();
  
    useEffect(  () => {
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
              <DeleteButton id={track._id} />
            </ListGroup>
          );
        })}
    </div>
  );
}
