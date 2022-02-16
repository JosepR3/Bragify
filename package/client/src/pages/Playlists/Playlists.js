import React from "react";

import withLayout from "../../components/HOC";
import TrackList from "../../components/molecules/TrackList/TrackList";

function Playlists() {
  return (
    <>
      <div className="mx-4">
        <h2 className="my-4 px-5 page__title">Playlists</h2>
        <TrackList />
      </div>
    </>
  );
}

export default withLayout(Playlists);
