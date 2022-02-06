import React from "react";
import {useNavigate} from "react-router-dom";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import TrackAlbumCard from "../../atoms/TrackAlbumCard";

export default function TrackList() {
const navigate = useNavigate();
// const location = useLocation();

  const AlbumArray = [
    <TrackAlbumCard key="key" />,
    <TrackAlbumCard key="key" />,
    <TrackAlbumCard key="key" />,
    <TrackAlbumCard key="key" />,
    <TrackAlbumCard key="key" />,
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
                  <ListItem
                    onClick={() => navigate("/playlists/single-album")}
                  >
                    {album}
                  </ListItem>
                </List>
              );
            })}
          </List>
        </Stack>
      </Box>
    </Box>
  );
}
