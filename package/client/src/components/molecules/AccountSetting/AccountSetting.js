import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut, editProfile } from "../../../redux/auth/auth-actions";
import { authSelector } from "../../../redux/auth/auth-selectors";

import ProfileImg from "../../atoms/ProfileImg";
import Dropdown from "react-bootstrap/Dropdown";


import * as ROUTES from "../../../routes";

function AccountSetting() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { currentUser } = useSelector(authSelector);

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/");
  };

  const handleEditProfile = () => {
    dispatch(editProfile());
  };
  return (
    <Dropdown>
      <Dropdown.Toggle title="Profile" className="btn__options p-0">
        <ProfileImg/>
        {currentUser?.username}
      </Dropdown.Toggle>
      <Dropdown.Menu variant="main-black">
        <Dropdown.Item href={ROUTES.EDIT_PROFILE} onClick={handleEditProfile}>
          Edit Profile
        </Dropdown.Item>
        <Dropdown.Item>Help</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AccountSetting;
