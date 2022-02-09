import React from "react";
import { useEffect } from "react";
import { fetchAllPlaylists } from "../../../redux/playlists/playlists-actions";
// import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import { playlistStateSelector } from "../../../redux/playlists/playlists-selector";
import { RiPlayCircleFill } from "react-icons/ri";
import { fetchPlaylistById } from "../../../redux/playlists/playlists-actions";
// import { playTrack } from "../../../redux/tracks/tracks-actions";

export default function TrackAlbumCard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPlaylists);
  }, [dispatch]);

  const { playlists } = useSelector(playlistStateSelector);

  const handlePlaylistId = (e) => {
    const id = e.target.id;
    dispatch(fetchPlaylistById(id))
    ;
  };



  return (
    <div>
      {playlists &&
        playlists.map((playlist) => {
          return (
            <Card
              key={playlist._id}
              id={playlist._id}
              onClick={(e) => {
                handlePlaylistId(e);
              }}
              className="p-2 m-2"
            >
              <div
                id={playlist._id}
                onClick={(e) => {
                  handlePlaylistId(e);
                }}
                className="position-relative p-0"
              >
                <Card.Img
                  id={playlist._id}
                  onClick={(e) => {
                    handlePlaylistId(e);
                  }}
                  variant="top"
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
                className="p-1 mt-2"
              >
                <Card.Title
                  id={playlist._id}
                  onClick={(e) => {
                    handlePlaylistId(e);
                  }}
                  className="m-0"
                >
                  {playlist.name}
                </Card.Title>

                <Card.Subtitle
                  id={playlist._id}
                  onClick={(e) => {
                    handlePlaylistId(e);
                  }}
                >
                  {playlist.description}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
}
