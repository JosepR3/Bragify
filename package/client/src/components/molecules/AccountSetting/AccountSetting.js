import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut, editProfile } from "../../../redux/auth/auth-actions";
import { authSelector } from "../../../redux/auth/auth-selectors";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/esm/DropdownButton";

import * as ROUTES from "../../../routes";

function AccountSetting() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(authSelector);

  const user = currentUser.username;

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/");
  };

  const handleEditProfile = () => {
    dispatch(editProfile());
  };
  return (
    <DropdownButton title={user || "sergiño"} variant="main-black">
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
