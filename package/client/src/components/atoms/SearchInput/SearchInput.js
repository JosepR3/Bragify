import React, { useState } from 'react';

import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import { GoSearch } from "react-icons/go"

import { useDispatch, useSelector } from "react-redux";
import { search, emptySearch } from "../../../redux/search/search-actions"

function SearchInput() {
  const searchArray = useSelector((state) => state.searchReducer.results)

  const dispatch = useDispatch();

  const [searchContent, setSearchContent] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(search(searchContent));
  }

  const updateSearchContent = (e) => {
    const value = e.target.value

    setSearchContent(value);
    dispatch(search(searchContent))
    dispatch(emptySearch());
  }
  console.log(searchArray)
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
