import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tracksSelector } from "../../../redux/tracks/tracks-selector";
import { authSelector } from "../../../redux/auth/auth-selectors";

import "@egjs/react-flicking/dist/flicking.css";

import {
  fetchAllTracks,
  fetchLikedTracks,
} from "../../../redux/tracks/tracks-actions";

import { RiPlayCircleFill } from "react-icons/ri";
import Card from "react-bootstrap/Card";
import {
  fetchPlaylistTrack,
  TrackData,
} from "../../../redux/playlists/playlists-actions";

function Genres() {
  const dispatch = useDispatch();
  const { tracks } = useSelector(tracksSelector);
  const { currentUser } = useSelector(authSelector);

  const userId = currentUser._id;

  useEffect(() => {
    dispatch(fetchAllTracks);
    dispatch(fetchLikedTracks(userId));
  }, [dispatch]);

  const handleTrackId = (track) => {
    dispatch(fetchPlaylistTrack(track.url));
    dispatch(
      TrackData({
        image: track.thumbnail,
        name: track.title,
        artist: track.artists,
        genre: track.genre,
        url: track.url,
      }),
    );
  };

  //find genres
  console.log("genres");
  const popTrack = tracks?.filter((track) => track.genre === "Pop");
  const houseTrack = tracks?.filter((track) => track.genre === "House");
  const reggaetonTrack = tracks?.filter((track) => track.genre === "Reggaeton");
  const trapTrack = tracks?.filter((track) => track.genre === "Trap");
  const rockTrack = tracks?.filter((track) => track.genre === "Rock");

  return (
    <main className="container mx-2 my-2">
      <h2 className="font-bold">Find Genres</h2>
      <h4> Pop </h4>
      <div className="d-flex flex-row justify-content-start">
        {popTrack &&
          popTrack.map((track) => {
            return (
              <Card
                onClick={() => handleTrackId(track)}
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
                  <Card.Subtitle
                    id={track._id}
                    className="pl__card-subtitle m-0"
                  >
                    {track.artists}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            );
          })}
      </div>
      <h4> House </h4>
      <div className="d-flex flex-row justify-content-start">
        {houseTrack &&
          houseTrack.map((track) => {
            return (
              <Card
                onClick={() => handleTrackId(track)}
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
                  <Card.Subtitle
                    id={track._id}
                    className="pl__card-subtitle m-0"
                  >
                    {track.artists}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            );
          })}
      </div>
      <h4> Reggaeton </h4>
      <div className="d-flex flex-row justify-content-start">
        {reggaetonTrack &&
          reggaetonTrack.map((track) => {
            return (
              <Card
                onClick={() => handleTrackId(track)}
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
                  <Card.Subtitle
                    id={track._id}
                    className="pl__card-subtitle m-0"
                  >
                    {track.artists}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            );
          })}
      </div>

      <h4> Rock </h4>
      <div className="d-flex flex-row justify-content-start">
        {rockTrack &&
          rockTrack.map((track) => {
            return (
              <Card
                onClick={() => handleTrackId(track)}
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
                  <Card.Subtitle
                    id={track._id}
                    className="pl__card-subtitle m-0"
                  >
                    {track.artists}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            );
          })}
      </div>

      <h4> Trap </h4>
      <div className="d-flex flex-row justify-content-start">
        {trapTrack &&
          trapTrack.map((track) => {
            return (
              <Card
                onClick={() => handleTrackId(track)}
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
                  <Card.Subtitle
                    id={track._id}
                    className="pl__card-subtitle m-0"
                  >
                    {track.artists}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            );
          })}
      </div>
      {/* </Flicking> */}
    </main>
  );
}

export default Genres;
