import * as React from 'react';
import { useState, useEffect } from 'react';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import LastPageIcon from '@mui/icons-material/LastPage';
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
import PauseSharpIcon from '@mui/icons-material/PauseSharp';
// import getStoredState from 'redux-persist/es/getStoredState';

export default function SongCard() {
    const theme = useTheme();
    const [isPlaying, setIsPlaying] = useState(false);


    const handleClick = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <Card sx={{ display: 'flex', bgcolor: '#424242', padding: "10px", margin: '10px', borderRadius: '10%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5" color="#ffebee">
                        Live From Space
                    </Typography>
                    <Typography variant="subtitle1" color="#ffebee" component="div">
                        Mac Miller
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                    {isPlaying ? <PauseSharpIcon style={{ fill: "white" }} onClick={handleClick} /> : <PlayArrowSharpIcon style={{ fill: "white" }} onClick={handleClick} />}

                </Box>

            </Box>

        </Card>
    );
}