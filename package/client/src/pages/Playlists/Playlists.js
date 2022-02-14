import React  from "react";
import { Outlet, useLocation } from "react-router-dom";
import withLayout from "../../components/HOC";
import TrackList from "../../components/molecules/TrackList/TrackList";

function Playlists() {
  const location = useLocation();

  return (
    <div className="d-flex">
      {location.pathname === "/playlists" && <TrackList />}
      {location.pathname === "/playlists/single-playlist" && <Outlet />}
    </div>
  );
}

export default withLayout(Playlists);
