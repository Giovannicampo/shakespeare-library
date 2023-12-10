import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../utility/Title";
import "../assets/css/App.css";
import { users, User } from "./UsersData";
import { Box, Button } from "@mui/material";
import FilterDialog from "./Filters/FilterDialog";
import UserDialog from "./CreateUser/UserDialog";

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
  const [openNewUserDialog, setOpenNewUSerDialog] = React.useState(false);

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

  const handleOpenNewUserDialog = (): void => {
    setOpenNewUSerDialog(true);
  };

  const handleCloseNewUserDialog = (): void => {
    setOpenNewUSerDialog(false);
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
        <Button
          variant="outlined"
          sx={{ maxWidth: "10em", marginRight: "0.5em" }}
          onClick={handleOpenNewUserDialog}
        >
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
            <TableCell>Name</TableCell>
            <TableCell>Surname</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell align="right">Books</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {localUsers.map((localUsers) => (
            <TableRow key={localUsers.id}>
              <TableCell>{localUsers.name}</TableCell>
              <TableCell>{localUsers.surname}</TableCell>
              <TableCell>{localUsers.age}</TableCell>
              <TableCell>{localUsers.phoneNumber}</TableCell>
              <TableCell align="right">
                {localUsers.booksIds.map((id) => `${id} `)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <UserDialog
          open={openNewUserDialog}
          handleClose={handleCloseNewUserDialog}
        ></UserDialog>
      </Table>
    </React.Fragment>
  );
}
