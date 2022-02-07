import React  from "react";
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
import SideBar from "../../components/organisms/SideBar";
import Copyright from "../../components/atoms/Copyright";
import EditProfile from "../../components/molecules/EditProfile";
import SingleAlbum from "../../components/organisms/SingleAlbum";
import Header from "../../components/organisms/Header";

function Home() {
  const { isAuthenticated, isEditing} = useSelector(authSelector);


  if (!isAuthenticated) {
    return <Navigate to={ROUTES.SIGN_IN} />;
  }

  return (
    <>
      {isEditing  && <EditProfile/>}
      <SingleAlbum/>
    </>
        
  );
}
export default withLayout(Home);
