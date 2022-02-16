import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylistTrack } from "../../../redux/playlists/playlists-actions";
import { playlistsSelector } from "../../../redux/playlists/playlists-selector";
import DeletePlaylistButton from "../../../components/atoms/DeletePlaylistButton/DeletePlaylistButton";

// React-Bootstrap
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

// Icons
import { BsFillPlayFill, BsShuffle, BsSuitHeart } from "react-icons/bs";

function SinglePlaylistHeader() {
  const { playlist } = useSelector(playlistsSelector);
  const dispatch = useDispatch();

  const handlePlayPlaylist = () => {
    const playlistTracks = playlist?.tracks.map((i) => i.url);
    const playlistTracksurls = playlistTracks.map((i) => i);
    dispatch(fetchPlaylistTrack(playlistTracksurls));
  };

  return (
    <div
      className="w-100"
      style={{
        backgroundImage: `url(${playlist?.thumbnail})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="spl__container flex-row d-flex gap-5">
        <div className="spl__container-img mx-5" id="photo">
          <Image
            src={playlist?.thumbnail}
            alt={playlist?.name + ".img"}
            className="w-100 h-100"
            rounded="true"
          />
        </div>
        <div className="d-flex flex-column justify-content-center">
          <h2 className="spl__name">{playlist?.name}</h2>
          <p className="brand_color">{playlist?.description}</p>
          <p className="brand_color mt-3">Created by: {playlist?.authorId}</p>
          <p className="brand_color">{playlist?.tracks.length} Tracks</p>
          <Button
            onClick={handlePlayPlaylist}
            className="spl__play me-3 mt-2"
            variant="log-color"
          >
            <BsFillPlayFill />
            Play
          </Button>
          <div className="d-flex gap-2 flex-row mt-4">
            <Button className="btn__options-round m-0">
              <BsShuffle className="h-50 w-50" />
            </Button>
            <Button className="btn__options-round m-0">
              <BsSuitHeart className="h-50 w-50" />
            </Button>
            <DeletePlaylistButton id={playlist?._id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePlaylistHeader;
