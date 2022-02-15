import React from "react";
import { Navigate } from "react-router-dom";
import { authSelector } from "../../redux/auth/auth-selectors";
import * as ROUTES from "../../routes";

// REDUX
import { useSelector } from "react-redux";

// HOC
import withLayout from "../../components/HOC/withLayout";

//COMPONENTS
import LikedMusic from "../../components/organisms/likedMusic/LikedMusic";
import PlaylistsByUser from "../../components/organisms/PlaylistsByUser";
import Genres from "../../components/organisms/Genres";


function Home() {
  const { isAuthenticated} = useSelector(authSelector);

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.SIGN_IN} />;
  }

  return (
    <>
    <PlaylistsByUser/>
    <LikedMusic/>
    <Genres/>
    </>
        
  );
}


export default withLayout(Home);
