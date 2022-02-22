import React from "react";
import { useSelector } from "react-redux";
import { authSelector } from "../../../redux/auth/auth-selectors";

const ProfileImg = () => {
  const { currentUser } = useSelector(authSelector);

  return ( 
    <img className="user__avatar me-2" src={currentUser?.img} />
  );
}
 
export default ProfileImg;