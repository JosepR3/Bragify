import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AlbumIcon from '@mui/icons-material/Album';
import ExploreIcon from '@mui/icons-material/Explore';
import RadioIcon from '@mui/icons-material/Radio';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <PlayCircleOutlineIcon style={{ fill: '#F170FF' }} />
      </ListItemIcon>
      <ListItemText primary="Listen" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ExploreIcon style={{ fill: '#F170FF' }}  />
      </ListItemIcon>
      <ListItemText primary="Explore" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <RadioIcon style={{ fill: '#F170FF' }}  />
      </ListItemIcon>
      <ListItemText primary="Radio" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader style={{background: 'inherit', color: '#C5DDE3'}}>Library</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <LibraryMusicIcon style={{ fill: '#F170FF' }} />
      </ListItemIcon>
      <ListItemText primary="Songs" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AlbumIcon style={{ fill: '#F170FF' }} />
      </ListItemIcon>
      <ListItemText primary="Albums" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarBorderIcon style={{ fill: '#F170FF' }} />
      </ListItemIcon >
      <ListItemText primary="Artists" />
    </ListItem>

  </div>);

export const playLists = (
  <div>
    <ListSubheader style={{background: 'inherit', color: '#C5DDE3'}}>Playlists</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <PlaylistPlayIcon style={{ fill: '#F170FF' }} />
      </ListItemIcon>
      <ListItemText primary="List" />
    </ListItem>
  </div>
);