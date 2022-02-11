import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import withLayout from "../../components/HOC";
import TrackList from "../../components/molecules/TrackList/TrackList";

function Playlists() {
  const location = useLocation();
  const path = window.location.pathname.split("/");
  const id = path.slice(-1);
  
  return (
    <>
      
      <div>
        {location.pathname === "/playlists" && (
          <div className="mx-4">
            <h2 className="my-4 page__title">Playlists</h2>
            <TrackList />
          </div>
        )}
        {location.pathname === `/playlists/single-playlist/${id}` && <Outlet />}
      </div>
    </>
  );
}


export default withLayout(Playlists);
