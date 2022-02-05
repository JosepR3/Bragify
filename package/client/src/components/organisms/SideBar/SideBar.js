import React from "react";
import Nav from "react-bootstrap/Nav";

import bIcon from "../../../assets/Icons/icon-b-64.png"
import {
  AlbumsIcon,
  HomeIcon,
  CreatePlaylistIcon,
  GenresIcon,
  PlaylistsIcon,
  TracksIcon,
  UploadTrackIcon,
  DownloadIcon
} from "../../../assets"

import "./sideBar.scss"

import * as ROUTES from "../../../routes";


function SideBar() {
  
  return (
    <Nav defaultActiveKey="/home" navbar="true" className="flex-column">
      <a className="d-flex align-items-center brand__link my-3 mx-4" href="#">
        <img className="brand__img me-3" src={bIcon}></img>
        BRAGIFY
      </a>
        <Nav.Item className="mt-4">
          <Nav.Link href={ROUTES.HOME}>
            <img className="nav__icon" src={HomeIcon}></img>Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mt-3">
          <Nav.Link href={ROUTES.TRACKS}>
            <img className="nav__icon" src={TracksIcon}></img>Tracks
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="{ROUTES.ALBUM}">
            <img className="nav__icon" src={AlbumsIcon}></img>Albums
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="{ROUTES.GENRES}">
            <img className="nav__icon" src={GenresIcon}></img>Genres
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={ROUTES.PLAYLISTS}>
            <img className="nav__icon" src={PlaylistsIcon}></img>Playlists
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mt-3">
          <Nav.Link href="{ROUTES.PLAYLISTS}">
            <img className="nav__icon" src={CreatePlaylistIcon}></img>Create Playlist
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={ROUTES.UPLOAD_TRACK}>
            <img className="nav__icon" src={UploadTrackIcon}></img>Upload Track
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mt-5">
          <Nav.Link href="">
            <img className="nav__icon" src={DownloadIcon}></img>Download App
          </Nav.Link>
        </Nav.Item>
    </Nav>
  );
}

export default SideBar;