import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../utility/Title";
import BookDialog from "./BookDialog";
import "../assets/css/App.css";
import { rows } from "./BooksData";
import { Book } from "./BooksData";

export const enum OPTION {
  YES = "yes",
  NO = "no",
}

interface BooksListProps {
  readonly setBook: (row: Book) => void;
  readonly handleClickOpen: () => void;
}

let books: Book[] = rows;

const BooksList = (props: BooksListProps): React.ReactElement => {
  return (
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
        {books.map((row) => (
          <TableRow
            className="app-button"
            key={row.id}
            onClick={() => {
              props.setBook(row);
              props.handleClickOpen();
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
  );
};

export default function BooksListForm(): React.ReactElement {
  const [open, setOpen] = React.useState(false);
  const [currentBook, setBook] = React.useState(rows[0]);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Title>Books</Title>
      <BooksList setBook={setBook} handleClickOpen={handleClickOpen}/>
      <BookDialog
        open={open}
        handleClose={handleClose}
        book={currentBook}
      ></BookDialog>
    </React.Fragment>
  );
}
