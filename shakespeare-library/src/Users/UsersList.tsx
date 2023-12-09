import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../Title";
import "../assets/css/App.css";
import { users, User } from "./UsersData";
import { Box, Button } from "@mui/material";
import FilterDialog from "./Filters/FilterDialog";

export type Predicate = {
  (u: User, s: string | number): boolean;
};

export let filters: Predicate[] = [];
export let filteredUsers: User[] = users;

export const setFilters = (newFilter: Predicate): void => {
  filters.push(newFilter);
};

export default function UsersList(): React.ReactElement {
  const [openFilter, setOpenFilter] = React.useState(false);
  const [localUsers, setLocalUsers] = React.useState(filteredUsers);

  const handleOpenFilter = (): void => {
    setOpenFilter(true);
  };

  const handleCloseFilter = (): void => {
    setOpenFilter(false);
  };

  const Filter = () => {
    filteredUsers = users;
    for (const f of filters) {
      filteredUsers = filteredUsers.filter(f);
    }
    setLocalUsers(filteredUsers);
  };

  const resetFilter = (): void => {
    filteredUsers = users;
    filters = [];
    setLocalUsers(filteredUsers);
  };

  return (
    <React.Fragment>
      <Title>Users</Title>
      <Box sx={{ display: "flex" }}>
        <Button
          variant="outlined"
          sx={{ maxWidth: "10em", marginRight: "0.5em" }}
          onClick={handleOpenFilter}
        >
          Filters
        </Button>
        <Button
          variant="outlined"
          sx={{ maxWidth: "10em", marginRight: "0.5em" }}
          onClick={resetFilter}
        >
          Reset
        </Button>
        <Button variant="outlined" color="primary">
          Add user
        </Button>
      </Box>
      <FilterDialog
        openFilter={openFilter}
        handleCloseFilter={handleCloseFilter}
        setFilters={setFilters}
        filter={Filter}
      ></FilterDialog>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Surname</TableCell>
            <TableCell>Age</TableCell>
            <TableCell align="right">Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {localUsers.map((localUsers) => (
            <TableRow key={localUsers.id}>
              <TableCell>{localUsers.id}</TableCell>
              <TableCell>{localUsers.name}</TableCell>
              <TableCell>{localUsers.surname}</TableCell>
              <TableCell>{localUsers.age}</TableCell>
              <TableCell align="right">{localUsers.phoneNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
