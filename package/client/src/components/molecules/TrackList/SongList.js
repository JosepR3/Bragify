import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';

import TrackCard from '../../atoms/TrackCard';
import TrackCarrousel from '../TrackCarrousel';

export default function TrackList() {

    // const tracks = useSelector(state => state.tracks.result);
    // const error = useSelector(state => state.tracks.error);
    // const status = useSelector(state => state.tracks.status);

    // const dispatch = useDispatch();

    return (
        <Box >
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Stack direction="row" spacing={2}>
                    <List component={Stack} direction="row">
                        <ListItem direction="row" ><TrackCard /></ListItem>
                        <ListItem ><TrackCard /></ListItem>
                        <ListItem ><TrackCard /></ListItem>
                    </List>
                </Stack>
            </Box>
            {/* {
                tracks.length > 0 ? <ul>
                    <li>Hello from TrackList</li>
                </ul> : <h2>No tracks yet</h2>
            } */}
 
        </Box>)
}
