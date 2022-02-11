import { useEffect, React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tracksSelector } from "../../redux/tracks/tracks-selector";
import { fetchAllTracks, fetchLikedTracks } from "../../redux/tracks/tracks-actions";

import withLayout from "../../components/HOC/withLayout";
import DeleteButton from "../../components/atoms/DeleteButton";
import LikeButton from "../../components/atoms/LikeButton";
import AddtoPlayListButton from "../../components/atoms/AddtoPlayListButton";


import ListGroup from "react-bootstrap/ListGroup";
// import { playlistStateSelector } from "../../redux/playlists/playlists-selector";

function Tracks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTracks);
    dispatch(fetchLikedTracks(userId));
  }, [dispatch]);

  const { tracks } = useSelector(tracksSelector);
  // const playlistId = useSelector(playlistStateSelector)
  const currentUser = JSON.parse(localStorage.getItem('user'))
  const userId = currentUser._id
  const playlistId ="6206283424250128f02e65d5"
  return (<>
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
              <AddtoPlayListButton
                playlistId={playlistId}
                trackId={track._id}
              />
              <LikeButton trackId={track._id} />
              <DeleteButton id={track._id} />
            </ListGroup>
          );
        })}
    </div>
  </>);
}

export default withLayout(Tracks);