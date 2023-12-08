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

interface TextFieldProps {
  readonly id: string;
  readonly label: string;
  readonly defaultValue: string;
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
    />
  );
};

interface SelectProps {
  readonly defaultvalue: boolean;
}

const SelectAvailable = function (props: SelectProps): React.ReactElement {
  return (
    <TextField
      id="available"
      select
      label="Availability"
      defaultValue={props.defaultvalue}
      sx={{ marginTop: "0.5em", minWidth: "8em" }}
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

export default function BookDialog(props: any) {
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
          ></CustomTextField>
          <CustomTextField
            id={"author"}
            label={"Author"}
            defaultValue={props.book.author}
          ></CustomTextField>
          <CustomTextField
            id={"genre"}
            label={"Genre"}
            defaultValue={props.book.genre}
          ></CustomTextField>
          <SelectAvailable
            defaultvalue={props.book.available}
          ></SelectAvailable>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button
            onClick={(e: React.MouseEvent) => {
              saveBookData(props.book); // to fix
              props.handleClose();
            }}
          >
            Save
          </Button>
          <Button sx={{ color: "red" }}>Delete</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
