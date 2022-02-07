import React from "react";
import { Navigate } from "react-router-dom";
import { authSelector } from "../../redux/auth/auth-selectors";
import * as ROUTES from "../../routes";

// REDUX
import { useSelector } from "react-redux";

// HOC
import withLayout from "../../components/HOC/withLayout";

// COMPONENTS
import SingleAlbum from "../../components/organisms/SingleAlbum";
import CreatePlaylist from "../../components/organisms/CreatePlaylist";


function Home() {
  const { isAuthenticated, currentUser } = useSelector(authSelector);
  console.log(currentUser);

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.SIGN_IN} />;
  }

  return (
    <>
      <SingleAlbum/>
      <CreatePlaylist/>
    </>
        
  );
}
export default withLayout(Home);
