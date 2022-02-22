import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../../redux/auth/auth-actions";
import { authSelector } from "../../../redux/auth/auth-selectors";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
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

  return (
    <Dropdown>
      <Dropdown.Toggle title="Profile" className="btn__options p-0">
        <ProfileImg/>
        {currentUser?.username}
      </Dropdown.Toggle>
      <Dropdown.Menu variant="main-black">
        <Link to={ROUTES.EDIT_PROFILE} className="dropdown-item">
          Edit Profile
        </Link>
        <OverlayTrigger placement="left" overlay={<Tooltip>We are not able to help you right now :(</Tooltip>}>
          <Dropdown.Item>Help</Dropdown.Item>
        </OverlayTrigger>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AccountSetting;
