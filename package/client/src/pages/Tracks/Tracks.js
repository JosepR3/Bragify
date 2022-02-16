import { useEffect, React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tracksSelector } from "../../redux/tracks/tracks-selector";
import {
  fetchAllTracks,
  fetchLikedTracks,
} from "../../redux/tracks/tracks-actions";
import withLayout from "../../components/HOC/withLayout";
import LikeButton from "../../components/atoms/LikeButton";
import DropDownList from "../../components/atoms/DropDownList";
import { fetchAllPlaylists, fetchPlaylistTrack } from "../../redux/playlists/playlists-actions";
import { playlistsSelector } from "../../redux/playlists/playlists-selector";
import DeleteButton from "../../components/atoms/DeleteButton";
// import { fetchTrackById } from "../../redux/tracks/tracks-actions";
import ListGroup from "react-bootstrap/ListGroup";

// import { BsPlusLg } from "react-icons/bs";
import Alert from "react-bootstrap/Alert";

function Tracks() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPlaylists);
    dispatch(fetchAllTracks);
    dispatch(fetchLikedTracks(userId));
  }, [dispatch]);

  const { tracks } = useSelector(tracksSelector);
  const playlist = useSelector(playlistsSelector);

  const handleTrackId = (trackUrl) => {
      dispatch(fetchPlaylistTrack(trackUrl))
  };

  const status = useSelector((state) => state.tracks.status);
  const deletedTrack = useSelector((state) => state.tracks.deletedTrack);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const userId = currentUser._id;

  return (
    <>
      <div className="mx-4 my-2">
        <h2 className="page__title px-5">All Tracks</h2>
        <ListGroup horizontal className="tracks__titles-row d-flex w-100 mb-1">
          <ListGroup.Item className="tracks__title"></ListGroup.Item>
          <ListGroup.Item className="tracks__title">Title</ListGroup.Item>
          <ListGroup.Item className="tracks__title">Artist</ListGroup.Item>
          <ListGroup.Item className="tracks__title">Genre</ListGroup.Item>
        </ListGroup>

        {tracks &&
          tracks.map((track) => {
            return (
              <ListGroup
                horizontal
                className="track__row w-100 d-flex"
                key={track._id}
              >
                <ListGroup.Item
                  className="track__row-thumbnail p-2"
                  id={track._id}
                  onClick={() => handleTrackId(track?.url)}
                >
                  <img
                    className="w-100 h-100"
                    id={track._id}
                    onClick={() => handleTrackId(track?.url)}
                    src={track.thumbnail}
                  ></img>
                </ListGroup.Item>
                <ListGroup.Item
                  id={track._id}
                  onClick={() => handleTrackId(track?.url)}
                  className="track__row-title"
                >
                  {track.title}
                </ListGroup.Item>
                <ListGroup.Item className="track__row-artist">
                  {track.artists}
                </ListGroup.Item>
                <ListGroup.Item className="track__row-genre">
                  {track.genre}
                </ListGroup.Item>
                <div className="ms-auto">
                <LikeButton track={track._id} />
                <DropDownList
                  playlist={playlist}
                  trackId={track._id}
                  url={track.url}
                  name={track.title}
                  artists={track.artists}
                  genre={track.genre}
                  thumbnail={track.thumbnail}
                />
                <DeleteButton id={track._id} />
                </div>
              </ListGroup>
            );
          })}
        {status === "DELETE_SUCCESS" && (
          <Alert variant="success">
            <p>{deletedTrack?.title} Was successfully deleted</p>

          </Alert>
        )}
      </div>
    </>
  );
}

export default withLayout(Tracks);
