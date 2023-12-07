import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BookmarkAddRoundedIcon from "@mui/icons-material/BookmarkAddRounded";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import BookmarkRemoveRoundedIcon from "@mui/icons-material/BookmarkRemoveRounded";
import PeopleIcon from "@mui/icons-material/People";
import { CONTEXT } from "./App";

export default function MainListItems(props: any): React.ReactElement {
  return (
    <React.Fragment>
      <ListItemButton onClick={() => props.handleContext(CONTEXT.DASHBOARD)}>
        <ListItemIcon>
          <AutoStoriesRoundedIcon style={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton onClick={() => props.handleContext(CONTEXT.CEDI)}>
        <ListItemIcon>
          <BookmarkRemoveRoundedIcon style={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary="Cedi" />
      </ListItemButton>
      <ListItemButton onClick={() => props.handleContext(CONTEXT.PRENDI)}>
        <ListItemIcon>
          <BookmarkAddRoundedIcon style={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary="Prendi" />
      </ListItemButton>
      <ListItemButton onClick={() => props.handleContext(CONTEXT.UTENTI)}>
        <ListItemIcon>
          <PeopleIcon style={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary="Utenti" />
      </ListItemButton>
    </React.Fragment>
  );
}
