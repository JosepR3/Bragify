import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import TrackAlbumCard from "../../atoms/TrackAlbumCard";
import { playlistStateSelector } from "../../../redux/playlists/playlists-selector";
import { fetchAllPlaylists } from "../../../redux/playlists/playlists-actions";

export default function TrackList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPlaylists);
  }, [dispatch]);

  const {playlists} = useSelector(playlistStateSelector);
console.log(playlists)

  const AlbumArray = [
    <TrackAlbumCard key="key" />,
    <TrackAlbumCard key="key" />,
    <TrackAlbumCard key="key" />,
    <TrackAlbumCard key="key" />,
    <TrackAlbumCard key="key" />,
  ];

  return (
    <ListGroup horizontal>
      {AlbumArray.map((album) => {
        return (
          <ListGroup.Item
            key="key"
            onClick={() => navigate("/playlists/single-playlist")}
          >
            {album}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
