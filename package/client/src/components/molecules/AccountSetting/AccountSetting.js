import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut, editProfile } from "../../../redux/auth/auth-actions";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/esm/DropdownButton";

import * as ROUTES from "../../../routes";

function AccountSetting() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem('user'))

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/");
  };

  const handleEditProfile = () => {
    dispatch(editProfile());
  };
  return (
    <DropdownButton title={currentUser.username} variant="main-black">
      <Dropdown.Item href={ROUTES.EDIT_PROFILE} onClick={handleEditProfile}>
        Edit Profile
      </Dropdown.Item>
      <Dropdown.Item >Help</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={handleSignOut}>
        Sign out
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default AccountSetting;
