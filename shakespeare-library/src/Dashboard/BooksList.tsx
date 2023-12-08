import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../Title";
import BookDialog from "./BookDialog";
import "../assets/css/App.css";
import { rows } from "./BooksData";

export const enum OPTION {
  YES = "yes",
  NO = "no",
}

export default function BooksList(): React.ReactElement {
  const [open, setOpen] = React.useState(false);
  const [currentBook, setBook] = React.useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Title>Books</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Genre</TableCell>
            <TableCell align="right">Availability</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              className="app-button"
              key={row.id}
              onClick={(e: React.MouseEvent) => {
                setBook(row);
                handleClickOpen();
              }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.author}</TableCell>
              <TableCell>{row.genre}</TableCell>
              <TableCell align="right">{`${
                row.available ? OPTION.YES : OPTION.NO
              }`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <BookDialog
        open={open}
        handleClose={handleClose}
        book={currentBook}
      ></BookDialog>
    </React.Fragment>
  );
}
