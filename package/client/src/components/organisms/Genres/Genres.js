import { useEffect, React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tracksSelector } from "../../../redux/tracks/tracks-selector";
import { useLocation } from "react-router-dom";
import * as ROUTES from "../../../routes";

import {
  fetchAllTracks,
  fetchLikedTracks,
} from "../../../redux/tracks/tracks-actions";
import { fetchAllPlaylists } from "../../../redux/playlists/playlists-actions";
import { playlistStateSelector } from "../../../redux/playlists/playlists-selector";
import { fetchTrackById } from "../../../redux/tracks/tracks-actions";

import { RiPlayCircleFill } from "react-icons/ri";
import Card from "react-bootstrap/Card";


// HOC
import withLayout from "../../HOC/withLayout";

function Genres() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchAllTracks);
    dispatch(fetchLikedTracks(userId));
  }, [dispatch]);

  const currentUser = JSON.parse(localStorage.getItem("user"));
  const userId = currentUser._id;
  const { tracks } = useSelector(tracksSelector);

  const handleTrackId = (e) => {
    const id = e.target.id;
    localStorage.setItem("trackId", id);
    let trackId = localStorage.getItem("trackId");
    dispatch(fetchTrackById(trackId));
  };

  //find genres
  const popTrack = tracks?.filter((track) => track.genre === "Pop");
  const houseTrack = tracks?.filter((track) => track.genre === "House");
  const reggaetonTrack = tracks?.filter((track) => track.genre === "Reggaeton");
  const trapTrack = tracks?.filter((track) => track.genre === "Trap");

  return (
    <main className="container my-2">
      <h2 className="font-bold text-center mx-4 mb-5">Find Genres</h2>
      <h3 className="text-secondary"> Pop </h3>
      <div className="d-flex flex-row justify-content-start">
        {popTrack &&
          popTrack.map((track) => {
            return (
              <div>
                <Card
                  onClick={(e) => handleTrackId(e)}
                  key={track._id}
                  id={track._id}
                  className="pl__card p-2 m-2"
                >
                  <div
                    id={track._id}
                    className="pl__card-img-container position-relative p-0"
                  >
                    <Card.Img
                      id={track._id}
                      variant="top"
                      className="pl__card-img"
                      src={track.thumbnail}
                    />
                    <RiPlayCircleFill
                      id={track._id}
                      className="card__play position-absolute top-50 start-50 translate-middle"
                    />
                  </div>
                  <Card.Body id={track._id} className="pl__card-body p-1 pt-2">
                    <Card.Title id={track._id} className="pl__card-title m-0">
                      {track.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
      </div>
      <br></br>
      <h3 className="text-secondary"> House </h3>
      <div className="d-flex flex-row justify-content-start">
        {houseTrack &&
          houseTrack.map((track) => {
            return (
              <div>
                <Card
                  onClick={(e) => handleTrackId(e)}
                  key={track._id}
                  id={track._id}
                  className="pl__card p-2 m-2"
                >
                  <div
                    id={track._id}
                    className="pl__card-img-container position-relative p-0"
                  >
                    <Card.Img
                      id={track._id}
                      variant="top"
                      className="pl__card-img"
                      src={track.thumbnail}
                    />
                    <RiPlayCircleFill
                      id={track._id}
                      className="card__play position-absolute top-50 start-50 translate-middle"
                    />
                  </div>
                  <Card.Body id={track._id} className="pl__card-body p-1 pt-2">
                    <Card.Title id={track._id} className="pl__card-title m-0">
                      {track.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
      </div>
      <br></br>
      <h3 className="text-secondary"> Reggaeton </h3>
      <div className="d-flex flex-row justify-content-start">
        {reggaetonTrack &&
          reggaetonTrack.map((track) => {
            return (
              <div>
                <Card
                  onClick={(e) => handleTrackId(e)}
                  key={track._id}
                  id={track._id}
                  className="pl__card p-2 m-2"
                >
                  <div
                    id={track._id}
                    className="pl__card-img-container position-relative p-0"
                  >
                    <Card.Img
                      id={track._id}
                      variant="top"
                      className="pl__card-img"
                      src={track.thumbnail}
                    />
                    <RiPlayCircleFill
                      id={track._id}
                      className="card__play position-absolute top-50 start-50 translate-middle"
                    />
                  </div>
                  <Card.Body id={track._id} className="pl__card-body p-1 pt-2">
                    <Card.Title id={track._id} className="pl__card-title m-0">
                      {track.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
      </div>

      <h3 className="text-secondary"> Trap </h3>
      <div className="d-flex flex-row justify-content-start">
        {trapTrack &&
          trapTrack.map((track) => {
            return (
              <div>
                <Card
                  onClick={(e) => handleTrackId(e)}
                  key={track._id}
                  id={track._id}
                  className="pl__card p-2 m-2"
                >
                  <div
                    id={track._id}
                    className="pl__card-img-container position-relative p-0"
                  >
                    <Card.Img
                      id={track._id}
                      variant="top"
                      className="pl__card-img"
                      src={track.thumbnail}
                    />
                    <RiPlayCircleFill
                      id={track._id}
                      className="card__play position-absolute top-50 start-50 translate-middle"
                    />
                  </div>
                  <Card.Body id={track._id} className="pl__card-body p-1 pt-2">
                    <Card.Title id={track._id} className="pl__card-title m-0">
                      {track.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
      </div>
    </main>
  );
}

  export default Genres;


