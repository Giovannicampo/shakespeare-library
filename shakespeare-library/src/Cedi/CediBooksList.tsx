import { Fragment, ReactElement, useState } from "react";
import { rows, Book } from "../Dashboard/BooksData";
import CediDialog from "./CediDialog";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "../assets/css/App.css";
import { OPTION } from "../Dashboard/BooksList";

interface CustomBooksListProps {
  readonly setBook: (row: Book) => void;
  readonly handleClickOpen: () => void;
  readonly isAvailable: boolean;
}

let books: Book[] = rows;

const CustomBooksList = (props: CustomBooksListProps): React.ReactElement => {
  if (props.isAvailable) {
    books = rows.filter((r) => r.available === true);
  }
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

export default function CediBooksList(): ReactElement {
  const [open, setOpen] = useState(false);
  const [currentBook, setBook] = useState(rows[0]);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <Fragment>
      <CustomBooksList
        setBook={setBook}
        handleClickOpen={handleClickOpen}
        isAvailable={true}
      />
      <CediDialog open={open} book={currentBook} handleClose={handleClose} />
    </Fragment>
  );
}
