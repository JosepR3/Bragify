import React from "react";
import Nav from "react-bootstrap/Nav";

// ICONS
import { bIcon } from "../../../assets";
import { IoMusicalNotes, IoAlbums } from "react-icons/io5";
import { RiPlayListAddLine, RiPlayListFill, RiUpload2Fill, RiDownload2Fill } from "react-icons/ri";
import { GiDrumKit } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";

import * as ROUTES from "../../../routes";


function SideBar() {
  
  return (
    <Nav defaultActiveKey="/home" navbar="true" className="side__bar flex-column">
      <a className="d-flex align-items-center brand__link my-3 mx-4" href="#">
        <img className="brand__img me-3" src={bIcon}></img>
        BRAGIFY
      </a>
        <Nav.Item className="mt-4">
          <Nav.Link href={ROUTES.HOME}>
            <AiFillHome/>Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mt-3">
          <Nav.Link href={ROUTES.TRACKS}>
            <IoMusicalNotes/>Tracks
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="">
            <IoAlbums/>Albums
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="">
            <GiDrumKit/>Genres
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={ROUTES.PLAYLISTS}>
            <RiPlayListFill />Playlists
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mt-5">
          <Nav.Link href="">
            <RiPlayListAddLine/>Create Playlist
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={ROUTES.UPLOAD_TRACK}>
            <RiUpload2Fill/>Upload Track
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mt-5">
          <Nav.Link href="">
            <RiDownload2Fill/>Download App
          </Nav.Link>
        </Nav.Item>
    </Nav>
  );
}

export default SideBar;