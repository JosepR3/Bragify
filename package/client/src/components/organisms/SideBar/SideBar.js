import React from "react";
import Nav from "react-bootstrap/Nav";

// ICONS
import { bIcon } from "../../../assets";
import { IoMusicalNotes, IoAlbums } from "react-icons/io5";
import {
  RiPlayListAddLine,
  RiPlayListFill,
  RiUpload2Fill,
  RiDownload2Fill,
} from "react-icons/ri";
import { GiDrumKit } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";

import * as ROUTES from "../../../routes";

function SideBar() {
  return (
    <div className="d-flex flex-column side__bar">
      <Nav
        defaultActiveKey="/home"
        navbar="true"
        className="md-auto side__bar__nav"
      >
        <a className="d-flex align-items-center brand__link my-3 mx-2" href="#">
          <img className="brand__img me-3" src={bIcon}></img>
          BRAGIFY
        </a>
        <Nav.Item className="mt-4 side__bar__item">
          <Nav.Link href={ROUTES.HOME} className="side__bar__link">
            <AiFillHome className="side__bar-icon" />
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mt-3 side__bar__item">
          <Nav.Link href={ROUTES.TRACKS} className="side__bar__link">
            <IoMusicalNotes className="side__bar-icon" />
            Tracks
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="side__bar__item">
          <Nav.Link href="" className="side__bar__link">
            <IoAlbums className="side__bar-icon" />
            Albums
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="side__bar__item">
          <Nav.Link href="" className="side__bar__link">
            <GiDrumKit className="side__bar-icon" />
            Genres
          </Nav.Link>
        </Nav.Item >
        <Nav.Item className="side__bar__item">
          <Nav.Link href={ROUTES.PLAYLISTS} className="side__bar__link">
            <RiPlayListFill className="side__bar-icon" />
            Playlists
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mt-5 side__bar__item">
          <Nav.Link href={ROUTES.CREATE_PLAYLIST} className="side__bar__link">
            <RiPlayListAddLine className="side__bar-icon" />
            Create Playlist
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="side__bar__item">
          <Nav.Link href={ROUTES.UPLOAD_TRACK} className="side__bar__link">
            <RiUpload2Fill className="side__bar-icon" />
            Upload Track
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mt-5 side__bar__item">
          <Nav.Link href="" className="side__bar__link">
            <RiDownload2Fill className="side__bar-icon" />
            Download App
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default SideBar;
