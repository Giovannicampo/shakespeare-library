import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import BookmarkAddRoundedIcon from "@mui/icons-material/BookmarkAddRounded";
import BookmarkRemoveRoundedIcon from "@mui/icons-material/BookmarkRemoveRounded";
import PeopleIcon from "@mui/icons-material/People";
import * as React from "react";
import { CONTEXT } from "./App";
import CustomItem from "./CustomItem";


export default function MainListItems(props: any): React.ReactElement {
  return (
    <React.Fragment>
      <CustomItem handleContext={props.handleContext} context={CONTEXT.DASHBOARD}>
        <AutoStoriesRoundedIcon style={{ color: "white" }} />
      </CustomItem>
      <CustomItem handleContext={props.handleContext} context={CONTEXT.CEDI}>
        <BookmarkRemoveRoundedIcon style={{ color: "white" }} />
      </CustomItem>
      <CustomItem handleContext={props.handleContext} context={CONTEXT.PRENDI}>
       <BookmarkAddRoundedIcon style={{ color: "white" }} />
      </CustomItem>
      <CustomItem handleContext={props.handleContext} context={CONTEXT.UTENTI}>
        <PeopleIcon style={{ color: "white" }} />
      </CustomItem>
    </React.Fragment>
  );
}