import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { authSelector } from "../../redux/auth/auth-selectors";


import withLayout from "../../components/HOC"
import TrackList from "../../components/molecules/TrackList/TrackList";

function Playlists() {
  const location = useLocation();
  const { currentUser } = useSelector(authSelector);
  const user = currentUser.username

  return (
    <div>
      <h4>Playlists made By {user}</h4>
      <div className="d-flex">
        {location.pathname === "/playlists" && <TrackList />}
        {location.pathname === "/playlists/single-playlist" && <Outlet/>}
      </div>
    </div>
  );
}

export default withLayout(Playlists);
