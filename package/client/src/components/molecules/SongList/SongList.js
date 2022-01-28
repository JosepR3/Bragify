import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';

import SongCard from '../../atoms/SongCard';
import SongCarrousel from '../SongCarrousel';

export default function SongList() {

    // const songs = useSelector(state => state.songs.result);
    // const error = useSelector(state => state.songs.error);
    // const status = useSelector(state => state.songs.status);

    // const dispatch = useDispatch();

    return (
        <Box >
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Stack direction="row" spacing={2}>
                    <List component={Stack} direction="row">
                        <ListItem direction="row" ><SongCard /></ListItem>
                        <ListItem ><SongCard /></ListItem>
                        <ListItem ><SongCard /></ListItem>
                    </List>
                </Stack>
            </Box>
            {/* {
                songs.length > 0 ? <ul>
                    <li>Hello from SongList</li>
                </ul> : <h2>No songs yet</h2>
            } */}
 
        </Box>)
}
