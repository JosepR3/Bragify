import React from "react";
import { Navigate } from "react-router-dom";
import { authSelector } from "../../redux/auth/auth-selectors";
import * as ROUTES from "../../routes";

// REDUX
import { useSelector } from "react-redux";

// HOC
import withLayout from "../../components/HOC/withLayout";

// COMPONENTS
import SinglePlaylist from "../../components/organisms/SinglePlaylist/SinglePlaylist";

function Home() {
  const { isAuthenticated} = useSelector(authSelector);

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.SIGN_IN} />;
  }

  return (
    <>
      <SinglePlaylist/>
    </>
        
  );
}
export default withLayout(Home);
