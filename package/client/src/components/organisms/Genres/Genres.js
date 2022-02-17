import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { tracksSelector } from "../../../redux/tracks/tracks-selector";
import { authSelector } from "../../../redux/auth/auth-selectors";

import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

import {
  fetchAllTracks,
  fetchLikedTracks,
} from "../../../redux/tracks/tracks-actions";

import { RiPlayCircleFill } from "react-icons/ri";
import Card from "react-bootstrap/Card";
import { fetchPlaylistTrack, TrackData } from "../../../redux/playlists/playlists-actions";

function Genres() {
  const dispatch = useDispatch();
  const { genres } = useSelector(tracksSelector);
  const { currentUser } = useSelector(authSelector);
  

  const userId = currentUser?._id;
  useEffect(() => {
    dispatch(fetchAllTracks);
    dispatch(fetchLikedTracks(userId));
  }, [dispatch]);

  const handleTrackId = (track) => {
    dispatch(fetchPlaylistTrack(track.url));
    dispatch(TrackData({
      image: track.thumbnail,
      name: track.title,
      artist: track.artists,
      genre: track.genre,
      url: track.url
    }))
  };
  

  //find genres
  console.log(genres?.pop)
  const pop = genres?.pop;
  const house = genres?.house;
  const reggaeton = genres?.reggaeton;
  const trap = genres?.trap;

  return (
    <>
      <h2 className="font-bold my-3">Find Genres</h2>
        <div><h3> Pop </h3></div>
        <Flicking moveType="freeScroll" bound={true} className="grid-panel" align="prev">
        {pop &&
          pop.map((track) => {
            return (
              <Card
                onClick={() => handleTrackId(track)}
                key={track._id}
                id={track._id}
                className="pl__card p-2 m-2"
                ref={track._id}
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
            );
          })}
      </Flicking>
      <div><h3> House </h3></div>
      <Flicking moveType="freeScroll" bound={true} className="grid-panel" align="prev">
        {house &&
          house.map((track) => {
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
                </Card.Body>
              </Card>
            );
          })}
      </Flicking>
      <div><h3> Reggaeton </h3></div>
      <Flicking moveType="freeScroll" bound={true} className="grid-panel" align="prev">
        {reggaeton &&
          reggaeton.map((track) => {
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
                </Card.Body>
              </Card>
            );
          })}
      </Flicking>
      <div><h3> Trap </h3></div>
      <Flicking moveType="freeScroll" bound={true} className="grid-panel" align="prev">
        {trap &&
          trap.map((track) => {
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
                </Card.Body>
              </Card>
            );
          })}
      </Flicking>
    </>
  );
}

export default Genres;
