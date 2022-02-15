import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import withLayout from "../../components/HOC";
import TrackList from "../../components/molecules/TrackList/TrackList";
import { fetchPlaylistById } from "../../redux/playlists/playlists-actions";

function Playlists() {
  const dispatch = useDispatch();
  const location = useLocation();
  const path = window.location.pathname.split("/");
  const id = path.slice(-1);
  
  useEffect(() => {
    dispatch(fetchPlaylistById(id));

  }, []);

  return (
    <>
      <div>
        {location.pathname === "/playlists" && (
          <div className="mx-4">
            <h2 className="my-4 px-5 page__title">Playlists</h2>
            <TrackList />
          </div>
        )}
        {location.pathname === `/playlists/single-playlist/${id}` && <Outlet />}
      </div>
    </>
  );
}


export default withLayout(Playlists);
