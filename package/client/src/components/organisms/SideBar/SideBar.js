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
import { AiFillHome } from "react-icons/ai";

import * as ROUTES from "../../../routes";
import { Link } from "react-router-dom";

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
          <Nav.Link className="side__bar__link">
            <AiFillHome className="side__bar-icon" />
            <Link to={ROUTES.HOME}>Home</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mt-3 side__bar__item">
          <Nav.Link className="side__bar__link">
            <IoMusicalNotes className="side__bar-icon" />
            <Link to={ROUTES.TRACKS}>Tracks</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="side__bar__item">
          <Nav.Link href="" className="side__bar__link">
            <IoAlbums className="side__bar-icon" />
            Albums
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="side__bar__item">
          <Nav.Link className="side__bar__link">
            <RiPlayListFill className="side__bar-icon" />
            <Link to={ROUTES.PLAYLISTS}>Playlists</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mt-5 side__bar__item">
          <Nav.Link  className="side__bar__link">
            <RiPlayListAddLine className="side__bar-icon" />
              <Link to={ROUTES.CREATE_PLAYLIST}>Create Playlist</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="side__bar__item">
          <Nav.Link className="side__bar__link">
            <RiUpload2Fill className="side__bar-icon" />
            <Link to={ROUTES.UPLOAD_TRACK}>Upload Track</Link>
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
