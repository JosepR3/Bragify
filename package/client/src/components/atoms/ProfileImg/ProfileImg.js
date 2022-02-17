import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../../redux/auth/auth-selectors";
import {
  resetAuthState,
} from "../../../redux/auth/auth-actions";

const ProfileImg = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(authSelector);

  useEffect(() => {
    dispatch(resetAuthState());
  },[dispatch]);

  return ( 
    <img className="user__avatar me-2" src={currentUser.img} />
  );
}
 
export default ProfileImg;