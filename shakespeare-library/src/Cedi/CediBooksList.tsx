import { Fragment, ReactElement, useState } from "react";
import { BooksList } from "../Dashboard/BooksList";
import { rows } from "../Dashboard/BooksData";
import CediDialog from "./CediDialog";

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
      <BooksList setBook={setBook} handleClickOpen={handleClickOpen} isAvailable={true} />
      <CediDialog open={open} book={currentBook} handleClose={handleClose} />
    </Fragment>
  );
}
