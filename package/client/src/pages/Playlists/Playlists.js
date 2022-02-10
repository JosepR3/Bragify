import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import withLayout from "../../components/HOC";
import TrackList from "../../components/molecules/TrackList/TrackList";

function Playlists() {
  const location = useLocation();

  return (
    <>
      <h2 className="m-4 page__title">Playlists</h2>
      <div className="mx-4">
        {location.pathname === "/playlists" && <TrackList />}
        {location.pathname === "/playlists/single-playlist" && <Outlet />}
      </div>
    </>
  );
}

export default withLayout(Playlists);
