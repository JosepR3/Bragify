import React from "react";

import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/esm/DropdownButton";


function AccountSetting() {
  return (
    <DropdownButton title="username" variant="main-black">
      
        <Dropdown.Item href="#/action-1">Edit Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Help</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-3">Sign out</Dropdown.Item>
      
    </DropdownButton>
  );
}

export default AccountSetting;
