import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import BookmarkRemoveRoundedIcon from '@mui/icons-material/BookmarkRemoveRounded';
import PeopleIcon from '@mui/icons-material/People';

export default function MainListItems(props: any) {
  return (
    <React.Fragment>
      <ListItemButton onClick={() => props.handleContext("Dashboard")}>
        <ListItemIcon>
          <AutoStoriesRoundedIcon style={{color:'white'}} />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton onClick={() => props.handleContext("Cedi")}>
        <ListItemIcon>
          <BookmarkRemoveRoundedIcon style={{color:'white'}} />
        </ListItemIcon>
        <ListItemText primary="Cedi" />
      </ListItemButton>
      <ListItemButton onClick={() => props.handleContext("Prendi")}>
        <ListItemIcon>
          <BookmarkAddRoundedIcon style={{color:'white'}} />
        </ListItemIcon>
        <ListItemText primary="Prendi" />
      </ListItemButton>
      <ListItemButton onClick={() => props.handleContext("Utenti")}>
        <ListItemIcon>
          <PeopleIcon style={{color:'white'}} />
        </ListItemIcon>
        <ListItemText primary="Utenti" />
      </ListItemButton>
    </React.Fragment>
  );
}
