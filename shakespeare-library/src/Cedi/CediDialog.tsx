import { BookProps } from "../Dashboard/BookDialog";
import { Book } from "../Dashboard/BooksData";
import { Fragment, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { User, users } from "../Users/UsersData";
import UserBox from "./UserBox";
import { saveLendBook } from "./SaveLendBook";

export default function CediDialog(props: BookProps) {
  const bookToLend: Book = props.book;
  const [userId, setUserId] = useState("");

  const handleOnSelect = (event: HTMLSelectElement) => {
    if(event.value === "") return;
    const userData: string[] = event.value.split(" ");
    const selectedUser: User = users.filter(
      (u) => u.name === userData[0] && u.surname === userData[1],
    )[0];
    setUserId(selectedUser.id);
  };

  return (
    <Fragment>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Book details</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ marginBottom: "0.5em" }}>
            Choose which user you want to lend the book to.
          </DialogContentText>
          <UserBox handleOnSelect={handleOnSelect} />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              saveLendBook(userId, bookToLend);
              props.handleClose();
            }}
          >
            Lend
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
