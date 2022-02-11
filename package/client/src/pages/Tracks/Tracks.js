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
import { fetchTrackById } from "../../redux/tracks/tracks-actions";
import { useNavigate } from "react-router-dom";

function Tracks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllTracks);
    dispatch(fetchLikedTracks(userId));
  }, [dispatch]);

  const handleTrackId = (e) => {
    const id = e.target.id;
    console.log(id)
    dispatch(fetchTrackById(id))
  };



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
          <ListGroup.Item className="list_item_titles">artists</ListGroup.Item>
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
                <ListGroup.Item  id={track._id}
                onClick={(e) => {
                  handleTrackId(e);
                }} className=" d-flex gap-2 list_item">
                  
                  <Card className="thumbnail ">
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
    </>
  );
}

export default withLayout(Tracks);
