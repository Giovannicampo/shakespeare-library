import * as React from "react";
import Typography from "@mui/material/Typography";
import Title from "../utility/Title";
import { rows } from "./BooksData";

export default function TotalBooks(): React.ReactElement {
  const date: Date = new Date();
  return (
    <React.Fragment>
      <Title>Number of Books</Title>
      <Typography component="p" variant="h4">
        {rows.length}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {date.toUTCString()}
      </Typography>
    </React.Fragment>
  );
}
