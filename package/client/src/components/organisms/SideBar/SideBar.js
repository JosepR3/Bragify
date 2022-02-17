import React from "react";
import Nav from "react-bootstrap/Nav";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
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
            <Link className="side__bar__link nav-link" to={ROUTES.HOME}>
              <AiFillHome className="side__bar-icon" />
              Home
            </Link>
        </Nav.Item>
        <Nav.Item className="mt-3 side__bar__item">
          <Link to={ROUTES.TRACKS} className="side__bar__link nav-link">
            <IoMusicalNotes className="side__bar-icon" />
            Tracks
          </Link>
        </Nav.Item>
        <OverlayTrigger placement="right" overlay={<Tooltip>We do not trust in this</Tooltip>}>
        <Nav.Item className="side__bar__item">
          <Nav.Link href="" className="side__bar__link nav-link">
            <IoAlbums className="side__bar-icon" />
            Albums
          </Nav.Link>
        </Nav.Item>
        </OverlayTrigger>
        <Nav.Item className="side__bar__item">
          <Link to={ROUTES.PLAYLISTS} className="side__bar__link nav-link">
            <RiPlayListFill className="side__bar-icon" />
            Playlists
          </Link>
        </Nav.Item>
        <Nav.Item className="mt-5 side__bar__item">
          <Link to={ROUTES.CREATE_PLAYLIST} className="side__bar__link nav-link">
            <RiPlayListAddLine className="side__bar-icon" />
            Create Playlist
          </Link>
        </Nav.Item>
        <Nav.Item className="side__bar__item">
          <Link to={ROUTES.UPLOAD_TRACK} className="side__bar__link nav-link">
            <RiUpload2Fill className="side__bar-icon" />
            Upload Track
          </Link>
        </Nav.Item>
        <OverlayTrigger placement="right" overlay={<Tooltip>Coming Soon</Tooltip>}>
        <Nav.Item className="mt-5 side__bar__item" disabled>
          <Nav.Link href="" className="side__bar__link">
            <RiDownload2Fill className="side__bar-icon" />
            Download App
          </Nav.Link>
        </Nav.Item>
        </OverlayTrigger>
      </Nav>
    </div>
  );
}

export default SideBar;
