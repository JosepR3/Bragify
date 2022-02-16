import React from "react";
import { useSelector } from "react-redux";

const ProfileImg = () => {
  const img = useSelector((state) => state.auth.username?.img)


  return (<>
    <div className="user-avatar -medium" style={{ backgroundImage: `url(${img})` }} ></div>
  </> );
}
 
export default ProfileImg;