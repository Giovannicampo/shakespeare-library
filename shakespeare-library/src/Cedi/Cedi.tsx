import { ReactElement } from "react";
import { Grid, Paper } from "@mui/material";
import Title from "../utility/Title";
import CediBooksList from "./CediBooksList";

export default function Cedi(): ReactElement {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Title>Choose the book to lend</Title>
            <CediBooksList />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
