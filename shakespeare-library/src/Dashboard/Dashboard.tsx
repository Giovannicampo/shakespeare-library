import { ReactElement } from "react";
import BooksList from "./BooksList";
import TotalBooks from "./TotalBooks";
import { Grid, Paper } from "@mui/material";
import BooksChart from "./BooksChart";

export default function Dashboard(): ReactElement {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <BooksList />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 120,
            }}
          >
            <TotalBooks />
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <BooksChart />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
