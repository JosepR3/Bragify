import React, { useEffect } from "react";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { tracksSelector } from "../../../redux/tracks/tracks-selector";

import { fetchLikedTracks } from "../../../redux/tracks/tracks-actions";
import Card from "react-bootstrap/Card";
import { RiPlayCircleFill } from "react-icons/ri";
import { fetchPlaylistTrack } from "../../../redux/playlists/playlists-actions";

function LikedMusic() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLikedTracks(userId));
  }, [dispatch]);

  const handleTrackId = (trackUrl) => {
    dispatch(fetchPlaylistTrack(trackUrl))
  };

  const currentUser = JSON.parse(localStorage.getItem("user"));
  const userId = currentUser._id;
  const { likedTracksList } = useSelector(tracksSelector);
  
  return (
    <>
      <h2 className="font-bold text-center mx-4 mb-5">Tracks that you liked</h2>
      <main className="container text-center d-flex">
        {likedTracksList?.length == 0 &&
          "Don't you have a favorite song yet? find one by listening to our list of available tracks!"}

        {likedTracksList &&
          likedTracksList.map((track) => {
            return (
              <Card
                key={track._id}
                id={track._id}
                className="pl__card p-2 m-2"
                onClick={() => handleTrackId(track?.url)}
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
                <Card.Body id={track._id} className="pl__card-body p-1 pt-2">
                  <Card.Title id={track._id} className="pl__card-title m-0">
                    {track.genre}
                  </Card.Title>
                </Card.Body>
              </Card>
            );
          })}
      </main>
    </>
  );
}
export default LikedMusic;
