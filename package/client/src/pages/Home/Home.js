import React, {useEffect} from "react";
import { Navigate } from "react-router-dom";
import { authSelector } from "../../redux/auth/auth-selectors";
import { Route, Routes} from "react-router-dom";
import * as ROUTES from "../../routes";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTracks } from "../../redux/tracks/tracks-actions";
import { tracksSelector } from "../../redux/tracks/tracks-selector";
// COMPONENTS
import SideBar from "../../components/organisms/SideBar";
import Copyright from "../../components/atoms/Copyright";
import EditProfile from "../../components/molecules/EditProfile";
import TracksList from "../../components/organisms/TracksList";
import SingleAlbum from "../../components/organisms/SingleAlbum";
import Header from "../../components/organisms/Header";
import FormCreateTracks from "../../components/organisms/FormCreateTracks/FormCreateTracks";

function Home() {
  const dispatch = useDispatch();
  const inTracks = useSelector(tracksSelector);
  const { isAuthenticated, isEditing, currentUser } = useSelector(authSelector);

  useEffect(() => {
    dispatch(fetchAllTracks);
  }, [dispatch]);

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.SIGN_IN} />;
  }
  return (
    <div className="d-flex">
      <SideBar />
        <div className="d-flex flex-column w-100">
          <Header/>
            {isEditing  && <EditProfile/>}
            {!isEditing && !inTracks && <InnerDash/>}  
            {inTracks && <TracksList />}
            <SingleAlbum/>
            <FormCreateTracks/>
            <Copyright sx={{ pt: 4, mt: 3 }} />
        </div>
    </div>
  );
}
export default Home;
