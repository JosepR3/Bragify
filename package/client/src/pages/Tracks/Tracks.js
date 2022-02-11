import { useEffect, React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tracksSelector } from "../../redux/tracks/tracks-selector";
import {
  fetchAllTracks,
  fetchLikedTracks,
} from "../../redux/tracks/tracks-actions";

import withLayout from "../../components/HOC/withLayout";
import DeleteButton from "../../components/atoms/DeleteButton";
import LikeButton from "../../components/atoms/LikeButton";

import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

function Tracks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTracks);
    dispatch(fetchLikedTracks(userId));
  }, [dispatch]);

  const { tracks } = useSelector(tracksSelector);

  const currentUser = JSON.parse(localStorage.getItem("user"));
  const userId = currentUser._id;
  return (
    <>
      <h2 className="page__title m-4">All Tracks</h2>
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
              <ListGroup.Item className=" d-flex gap-2 list_item">
                <Card className="thumbnail">
                  <img src={track.thumbnail}></img>
                </Card>
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

export default withLayout(Tracks);
