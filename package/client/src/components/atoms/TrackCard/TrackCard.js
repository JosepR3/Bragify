import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
import PauseSharpIcon from '@mui/icons-material/PauseSharp';

// import { playSong } from '../../../api/mock-apis';
// import { pauseSong } from '../../../api/mock-apis';

import { playTrack } from '../../../redux/tracks/tracks-actions';

import './TrackCard.scss';

export default function TrackCard({ albumName,
    artistName,
    tracks,
    albumImageUrl }) {
    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const tracks = useSelector(state => state.tracks);
    // const { currentTrack } = tracks;
    // const { currentTrack } = tracks;
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => {

        dispatch(playTrack(tracks));


    };

    const viewTracks = (e) => {
        if (e.target.id !== 'pause-button' && e.target.id !== 'play-button' && e.target.id !== 'button-box') {
            navigate('/tracks');
            dispatch(playTrack(tracks));
            // navigate('/track-song-list');

        }
    }


    return (
        <Card sx={{ display: 'flex', bgcolor: '#424242', padding: "10px", margin: '10px', borderRadius: '10%' }} >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                <CardContent sx={{ flex: '1 0 auto' }}>
                    {albumName && <Typography component="div" variant="h7" color="#ffebee">
                        {albumName || " "}
                    </Typography>}
                    {artistName && <Typography variant="subtitle1" color="#ffebee" component="div">
                        {artistName || " "}
                    </Typography>}
                </CardContent>
                <CardMedia
                    onClick={viewTracks}
                    component="img"
                    sx={{ width: '100%', height: '100%', backgroundColor: '#424242', position: 'relative', }}
                    image={albumImageUrl}
                    alt="Live from space album cover"

                />
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }} id="button-box">

                    {isPlaying ? <PauseSharpIcon style={{ fill: "white" }} onClick={handleClick} id="pause-button" /> : <PlayArrowSharpIcon style={{ fill: "white" }} onClick={handleClick} id="play-button" />}

                </Box>
            </Box>
        </Card>
    );
}