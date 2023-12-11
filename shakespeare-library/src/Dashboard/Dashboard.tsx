import { ReactElement } from "react";
import { Grid } from "@mui/material";
import BooksListForm from "./BooksList";

export default function Dashboard(): ReactElement {
  return (
    <>
      <Grid container spacing={3}>
        <BooksListForm />
      </Grid>
    </>
  );
}
