import React from 'react';

import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import { GoSearch } from "react-icons/go"

function SearchInput(){
  return(
    <InputGroup className="search">
      <GoSearch className="search__icon" />
      <FormControl placeholder="search" />
    </InputGroup>
  )
}

export default SearchInput
