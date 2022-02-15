import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPlaylistById } from "../../redux/playlists/playlists-actions";
import withLayout from "../../components/HOC/withLayout";
// Components
import SinglePlaylistHeader from "../../components/molecules/SinglePlaylistHeader";
import SinglePlaylistTracks from "../../components/molecules/SinglePlaylistTracks";

function SinglePlaylist() {
  const dispatch = useDispatch();

  const path = window.location.pathname.split("/");
  const id = path.slice(-1);

  useEffect(() => {
    dispatch(fetchPlaylistById(id));
  }, [dispatch]);

  return (
    <div className="mb-3">
      <SinglePlaylistHeader />
      <SinglePlaylistTracks />
    </div>
  );
}

export default withLayout(SinglePlaylist);
