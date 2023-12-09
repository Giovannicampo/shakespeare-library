import { ReactElement } from "react";
import UsersList from "./UsersList";
import { Grid, Paper } from "@mui/material";

export default function Users(): ReactElement {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <UsersList />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
