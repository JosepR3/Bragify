import React, { useState } from 'react';

import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import { GoSearch } from "react-icons/go"

import { useDispatch } from "react-redux";
import { search } from "../../../redux/search/search-actions"

function SearchInput() {


  const dispatch = useDispatch();
  const [searchContent, setSearchContent] = useState("");

  const handleSearch = () => {
    event.preventDefault();

    dispatch(search(searchContent));
  }

  const updateSearchContent = (e) => {
    setSearchContent(e.target.value);
  }

  return (
    <form onSubmit={handleSearch}>
      <InputGroup className="search" onChange={updateSearchContent}>
        <GoSearch className="search__icon" />
        <FormControl placeholder="search" />
      </InputGroup>
    </form>
  )
}

export default SearchInput
