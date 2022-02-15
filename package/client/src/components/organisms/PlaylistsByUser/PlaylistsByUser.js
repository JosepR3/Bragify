import React, { useEffect } from "react";
import { fetchAllPlaylists } from "../../../redux/playlists/playlists-actions";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import { playlistsSelector } from "../../../redux/playlists/playlists-selector";
import { RiPlayCircleFill } from "react-icons/ri";
import { fetchPlaylistById } from "../../../redux/playlists/playlists-actions";

export default function PlaylistsByUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllPlaylists);
  }, [dispatch]);

  const { playlists } = useSelector(playlistsSelector);
  const currentUser = JSON.parse(localStorage.getItem("user"));

  const handlePlaylistId = (e) => {
    const id = e.target.id;
    dispatch(fetchPlaylistById(id));
    navigate(`/playlists/single-playlist/${id}`);
  };

  //find user playlists
  const userId = currentUser._id;
  const userPlaylists = playlists?.filter(
    (playlist) => playlist.authorId === userId,
  );

  return (
    <container className="">
      <h2 className="font-bold text-center mx-4 mb-5">
        Playlists by {currentUser.username}
      </h2>
      <div className="d-flex flex-row justify-content-start">
        <hr />
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
                    className="pl__card-img"
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
      </div>
    </container>
  );
}
