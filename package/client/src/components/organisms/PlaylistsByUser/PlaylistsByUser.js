import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import { RiPlayCircleFill } from "react-icons/ri";

//REDUX
import {
  fetchAllPlaylists,
  setUserPlaylists,
} from "../../../redux/playlists/playlists-actions";
import { playlistsSelector } from "../../../redux/playlists/playlists-selector";
import { authSelector } from "../../../redux/auth/auth-selectors";

//FLICKING
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

export default function PlaylistsByUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { playlists } = useSelector(playlistsSelector);

  useEffect(() => {
    dispatch(fetchAllPlaylists);
    dispatch(setUserPlaylists({ playlists, currentUser }));
  }, [dispatch]);

  const { currentUser } = useSelector(authSelector);

  const { userPlaylists } = useSelector(playlistsSelector);

  const handlePlaylistId = (e) => {
    const id = e.target.id;
    navigate(`/playlists/single-playlist/${id}`);
  };

  //find user playlists
  
  // const userId = currentUser?._id;
  // const userPlaylists = playlists?.filter((playlist) => playlist?.authorId === userId,
  // );

  return (
    <div className="w-100">
      <h2 className="font-bold my-2">
        Playlists by {currentUser?.username}
      </h2>
      <Flicking
        moveType="freeScroll"
        bound={true}
        className="mx-auto"
        align="prev"
      >
        {userPlaylists &&
          userPlaylists.map((playlist) => {
            return (
              <Card
                key={playlist._id}
                id={playlist._id}
                onClick={(e) => {
                  handlePlaylistId(e);
                }}
                className="pl__card p-2 m-1"
              >
                <div
                  id={playlist._id}
                  onClick={(e) => {
                    handlePlaylistId(e);
                  }}
                  className="pl__card-img-container position-relative p-0"
                >
                  <Card.Img
                    id={playlist._id}
                    onClick={(e) => {
                      handlePlaylistId(e);
                    }}
                    variant="top"
                    className="pl__card-img rounded"
                    src={playlist.thumbnail}
                  />
                  <RiPlayCircleFill
                    id={playlist._id}
                    onClick={(e) => {
                      handlePlaylistId(e);
                    }}
                    className="card__play position-absolute top-50 start-50 translate-middle"
                  />
                </div>
                <Card.Body
                  id={playlist._id}
                  onClick={(e) => {
                    handlePlaylistId(e);
                  }}
                  className="pl__card-body p-1 pt-2"
                >
                  <Card.Title
                    id={playlist._id}
                    onClick={(e) => {
                      handlePlaylistId(e);
                    }}
                    className="pl__card-title m-0"
                  >
                    {playlist.name}
                  </Card.Title>
                  <Card.Subtitle
                    id={playlist._id}
                    onClick={(e) => {
                      handlePlaylistId(e);
                    }}
                    className="pl__card-subtitle m-0"
                  >
                    {playlist.description}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            );
          })}
      </Flicking>
    </div>
  );
}
