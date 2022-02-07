import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AlbumIcon from "@mui/icons-material/Album";
import ExploreIcon from "@mui/icons-material/Explore";
import RadioIcon from "@mui/icons-material/Radio";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useDispatch } from "react-redux";
import * as ROUTES from "../../../routes";

import { toTracks } from "../../../redux/tracks/tracks-actions";
import { editProfile } from "../../../redux/auth/auth-actions";

export default function MainList() {
  const dispatch = useDispatch();

  function handletoTracks() {
    dispatch(toTracks());
  }
  return (
    <>
      <div>
        <ListSubheader style={{ background: "inherit", color: "#C5DDE3" }}>
          Library
        </ListSubheader>
        <a href={ROUTES.TRACKS}>
          <ListItem button onClick={handletoTracks}>
            <ListItemIcon>
              <LibraryMusicIcon style={{ fill: "#F170FF" }} />
            </ListItemIcon>
            <ListItemText primary="Tracks" />
          </ListItem>
        </a>
        <a href={ROUTES.PLAYLISTS}>
          <ListItem button>
            <ListItemIcon>
              <AlbumIcon style={{ fill: "#F170FF" }} />
            </ListItemIcon>
            <ListItemText primary="Playlists" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StarBorderIcon style={{ fill: "#F170FF" }} />
            </ListItemIcon>
            <ListItemText primary="Artists" />
          </ListItem>
        </a>
      </div>
      <div>
        <ListSubheader style={{ background: "inherit", color: "#C5DDE3" }}>
          Playlists
        </ListSubheader>
        <ListItem button>
          <ListItemIcon>
            <PlaylistPlayIcon style={{ fill: "#F170FF" }} />
          </ListItemIcon>
          <ListItemText primary="List" />
        </ListItem>
      </div>
    </>
  );
}
