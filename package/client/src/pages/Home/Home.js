import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import * as ROUTES from "../../routes";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { authSelector } from "../../redux/auth/auth-selectors";

// HOC
import withLayout from "../../components/HOC/withLayout";

//COMPONENTS
import LikedMusic from "../../components/organisms/likedMusic/LikedMusic";
import PlaylistsByUser from "../../components/organisms/PlaylistsByUser";
import Genres from "../../components/organisms/Genres";
import { fetchAllPlaylists, fetchPlaylistsByUser } from "../../redux/playlists/playlists-actions";

function Home() {
  const { isAuthenticated, currentUser} = useSelector(authSelector);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAllPlaylists);
    fetchPlaylistsByUser(dispatch,currentUser)
  }, [dispatch])

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.SIGN_IN} />;
  }

  return (
    <div className="container m-4">
    <PlaylistsByUser/>
    <LikedMusic/>
    <Genres/>
    </div>
  );
}


export default withLayout(Home);
