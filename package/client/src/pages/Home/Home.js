import React from "react";
import { Navigate } from "react-router-dom";
import { authSelector } from "../../redux/auth/auth-selectors";
import * as ROUTES from "../../routes";
import LikedMusic from "../../components/organisms/likedMusic/LikedMusic";
import TrackList from "../../components/molecules/TrackList/TrackList";
// REDUX
import { useSelector } from "react-redux";

// HOC
import withLayout from "../../components/HOC/withLayout";
import PlaylistsByUser from "../../components/organisms/PlaylistsByUser";


function Home() {
  const { isAuthenticated} = useSelector(authSelector);

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.SIGN_IN} />;
  }

  return (
    <>
    <PlaylistsByUser/>
    {/* <TrackList/> */}
    <LikedMusic/>
    </>
        
  );
}
export default withLayout(Home);
