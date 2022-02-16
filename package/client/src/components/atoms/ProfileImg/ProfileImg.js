import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  resetAuthState,
} from "../../../redux/auth/auth-actions";

const ProfileImg = () => {
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    dispatch(resetAuthState());
  },[dispatch]);

  return ( 
    <img className="user__avatar me-2" src={currentUser.img} />
  );
}
 
export default ProfileImg;