import React from "react";
// ---------COMPONENTS
import SearchInput from "../../atoms/SearchInput";
import AccountSetting from "../../molecules/AccountSetting";
// ---------REACT BOOTSTRAP
import Nav from "react-bootstrap/Nav";




function Header() {

  return (
    <Nav className="d-flex justify-content-between header">
      <SearchInput />
      <AccountSetting />
    </Nav>
  );
}

export default Header;
