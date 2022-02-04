import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import TrackAlbumCard from "../../atoms/TrackAlbumCard";
import { toSingleAlbum } from "../../../redux/playlists/playlists-actions";

export default function TrackList() {
  const dispatch = useDispatch();
  // const tracks = useSelector(state => state.tracks.result);
  // const error = useSelector(state => state.tracks.error);
  const handleToSingleAlbum = () => {
    dispatch(toSingleAlbum());
  };

  const AlbumArray = [
    <TrackAlbumCard />,
    <TrackAlbumCard />,
    <TrackAlbumCard />,
    <TrackAlbumCard />,
    <TrackAlbumCard />,
  ];

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Stack direction="row" spacing={2}>
          <List component={Stack} direction="row">
            {AlbumArray.map((album) => {
              return (
                <List
                  className="list-row w-100 d-flex justify-content-center"
                  key="key"
                >
                  <ListItem onclick={handleToSingleAlbum}>{album}</ListItem>
                </List>
              );
            })}
          </List>
        </Stack>
      </Box>
    </Box>
  );
}
