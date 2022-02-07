import React from "react";
import { Navigate } from "react-router-dom";
import { authSelector } from "../../redux/auth/auth-selectors";
import * as ROUTES from "../../routes";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTracks } from "../../redux/tracks/tracks-actions";
import { tracksSelector } from "../../redux/tracks/tracks-selector";
// HOC
import withLayout from "../../components/HOC/withLayout";
// COMPONENTS
import SingleAlbum from "../../components/organisms/SingleAlbum";


function Home() {
  const { isAuthenticated, currentUser } = useSelector(authSelector);
  console.log(currentUser);

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.SIGN_IN} />;
  }

  return (
    <>
      <SingleAlbum/>
    </>
        
  );
}
export default withLayout(Home);
