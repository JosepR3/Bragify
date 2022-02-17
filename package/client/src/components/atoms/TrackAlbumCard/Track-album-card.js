import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPlaylists } from "../../../redux/playlists/playlists-actions";
// import { fetchAllTracks } from "../../../redux/tracks/tracks-actions";
import Card from "react-bootstrap/Card";
import { playlistsSelector } from "../../../redux/playlists/playlists-selector";
import { RiPlayCircleFill } from "react-icons/ri";
// import { playTrack } from "../../../redux/tracks/tracks-actions";

export default function TrackAlbumCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    dispatch(fetchAllPlaylists);
  }, [dispatch]);

  const { playlists } = useSelector(playlistsSelector);


  const handlePlaylistId = (e) => {
    const id = e.target.id;
    navigate(`/playlists/single-playlist/${id}`);
  };
  
  return (
    <div className="d-flex flex-wrap">
      {playlists &&
        playlists.map((playlist) => {
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
        })
      }
    </div>
    );
}
