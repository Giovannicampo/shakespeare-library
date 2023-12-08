import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { MenuItem } from "@mui/material";
import { OPTION } from "./BooksList";
import saveBookData from "./SaveBookData";
import deleteBook from "./DeleteBook";
import { Book } from "./BooksData";

interface TextFieldProps {
  readonly id: string;
  readonly label: string;
  readonly defaultValue: string;
  readonly handler: React.ChangeEventHandler;
}

const CustomTextField = function (props: TextFieldProps): React.ReactElement {
  return (
    <TextField
      autoFocus
      margin="dense"
      id={props.id}
      label={props.label}
      fullWidth
      variant="outlined"
      defaultValue={props.defaultValue}
      onChange={props.handler}
    />
  );
};

interface SelectProps {
  readonly defaultvalue: boolean;
  readonly handler: React.ChangeEventHandler;
}

const SelectAvailable = function (props: SelectProps): React.ReactElement {
  return (
    <TextField
      id="available"
      select
      label="Availability"
      defaultValue={props.defaultvalue}
      sx={{ marginTop: "0.5em", minWidth: "8em" }}
      onChange={props.handler}
    >
      <MenuItem key={true as any} value={true as any}>
        {OPTION.YES}
      </MenuItem>
      <MenuItem key={false as any} value={false as any}>
        {OPTION.NO}
      </MenuItem>
    </TextField>
  );
};

interface BookProps {
  readonly open: boolean;
  readonly handleClose: () => void;
  readonly book: Book;
}

export default function BookDialog(props: BookProps) {
  let currentBook: Book = {
    id: props.book.id,
    name: props.book.name,
    author: props.book.author,
    genre: props.book.genre,
    available: props.book.available,
  };

  function setName(event: HTMLInputElement): void {
    currentBook.name = event.value;
  }
  function setAuthor(event: HTMLInputElement): void {
    currentBook.author = event.value;
  }
  function setGenre(event: HTMLInputElement): void {
    currentBook.genre = event.value;
  }
  function setAvailable(event: HTMLInputElement): void {
    currentBook.available = event.value as any;
  }

  return (
    <React.Fragment>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Book details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            View and change book details as you prefer to.
          </DialogContentText>
          <CustomTextField
            id={"name"}
            label={"Name"}
            defaultValue={props.book.name}
            handler={(e) => {
              setName(e.target as HTMLInputElement);
            }}
          ></CustomTextField>
          <CustomTextField
            id={"author"}
            label={"Author"}
            defaultValue={props.book.author}
            handler={(e) => {
              setAuthor(e.target as HTMLInputElement);
            }}
          ></CustomTextField>
          <CustomTextField
            id={"genre"}
            label={"Genre"}
            defaultValue={props.book.genre}
            handler={(e) => {
              setGenre(e.target as HTMLInputElement);
            }}
          ></CustomTextField>
          <SelectAvailable
            defaultvalue={props.book.available}
            handler={(e) => {
              setAvailable(e.target as HTMLInputElement);
            }}
          ></SelectAvailable>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              saveBookData(currentBook);
              props.handleClose();
            }}
          >
            Save
          </Button>
          <Button
            sx={{ color: "red" }}
            onClick={() => {
              deleteBook(currentBook);
              props.handleClose();
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
