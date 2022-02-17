import React, { useEffect } from "react";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { tracksSelector } from "../../../redux/tracks/tracks-selector";
import { authSelector } from "../../../redux/auth/auth-selectors";
import { fetchLikedTracks } from "../../../redux/tracks/tracks-actions";
import { fetchPlaylistTrack } from "../../../redux/playlists/playlists-actions";

import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

import Card from "react-bootstrap/Card";
import { RiPlayCircleFill } from "react-icons/ri";

function LikedMusic() {
  const dispatch = useDispatch();

  const { likedTracksList } = useSelector(tracksSelector);
  const { currentUser } = useSelector(authSelector);

  const userId = currentUser._id;

  useEffect(() => {
    dispatch(fetchLikedTracks(userId));
  }, [dispatch]);

  const handleTrackId = (track) => {
    dispatch(fetchPlaylistTrack(track?.url));
  };

  return (
    <>
      <div className="w-100">
        <h2 className="font-bold mx-2 my-2">Tracks that you liked</h2>
        {likedTracksList?.length == 0 &&
          "Don't you have a favorite song yet? find one by listening to our list of available tracks!"}
        <Flicking
          moveType="freeScroll"
          bound={true}
          className="mx-auto"
          align="prev"
        >
          {likedTracksList &&
            likedTracksList.map((track) => {
              return (
                <Card
                  onClick={() => handleTrackId(track)}
                  key={track._id}
                  id={track._id}
                  className="pl__card p-2 m-1"
                >
                  <div
                    id={track._id}
                    className="pl__card-img-container position-relative p-0"
                  >
                    <Card.Img
                      id={track._id}
                      variant="top"
                      className="pl__card-img rounded"
                      src={track.thumbnail}
                    />
                    <RiPlayCircleFill
                      id={track._id}
                      className="card__play position-absolute top-50 start-50 translate-middle"
                    />
                  </div>
                  <Card.Body id={track._id} className="pl__card-body p-1">
                    <Card.Title id={track._id} className="pl__card-title m-0">
                      {track.title}
                    </Card.Title>
                  </Card.Body>
                  <Card.Body id={track._id} className="pl__card-body p-1">
                    <Card.Subtitle
                      id={track._id}
                      className="pl__card-subtitle m-0"
                    >
                      {track.artists}
                    </Card.Subtitle>
                    <p>{track.genre}</p>
                  </Card.Body>
                </Card>
              );
            })}
        </Flicking>
      </div>
    </>
  );
}
export default LikedMusic;
