import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CustomTextField from "../../utility/CustomTextField";
import { User } from "../UsersData";
import saveUserData from "./SaveUserData";
import { v4 as uuidv4 } from "uuid";
import CustomAlert from "./Alert";
import { FIELD } from "../Filters/FilterSelector";

interface UserDialogProps {
  readonly open: boolean;
  readonly handleClose: () => void;
}

const areEmpty = (...strings: string[]): boolean => {
  return strings.some((s) => s === "");
};

export default function UserDialog(props: UserDialogProps): React.ReactElement {
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [age, setAge] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const [openAlert, setOpenAlert] = React.useState(false);

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  function handleNameChange(event: HTMLInputElement): void {
    setName(event.value);
  }

  function handleSurnameChange(event: HTMLInputElement): void {
    setSurname(event.value);
  }

  function handleAgeChange(event: HTMLInputElement): void {
    if (isNaN(Number(event.value))) {
      setOpenAlert(true);
      return;
    }
    setAge(event.value);
  }

  function handlePhoneNumberChange(event: HTMLInputElement): void {
    if (isNaN(Number(event.value))) {
      setOpenAlert(true);
      return;
    }
    setPhoneNumber(event.value);
  }

  const resetData = () => {
    setName("");
    setSurname("");
    setAge("");
    setPhoneNumber("");
  };

  function handleOnSave() {
    if (areEmpty(name, surname, phoneNumber, age)) {
      setOpenAlert(true);
      return;
    }

    const newUser: User = {
      id: uuidv4(),
      name,
      surname,
      age,
      phoneNumber,
      booksIds: [],
    };

    saveUserData(newUser);
    resetData();
    props.handleClose();
  }

  return (
    <React.Fragment>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Add user</DialogTitle>
        <DialogContent>
          <DialogContentText>Add a new user and edit infos.</DialogContentText>
          <CustomTextField
            id={FIELD.NAME}
            label={FIELD.NAME}
            defaultValue={""}
            handler={(e) => {
              handleNameChange(e.target as HTMLInputElement);
            }}
          ></CustomTextField>
          <CustomTextField
            id={FIELD.SURNAME}
            label={FIELD.SURNAME}
            defaultValue={""}
            handler={(e) => {
              handleSurnameChange(e.target as HTMLInputElement);
            }}
          ></CustomTextField>
          <CustomTextField
            id={FIELD.AGE}
            label={FIELD.AGE}
            defaultValue={""}
            handler={(e) => {
              handleAgeChange(e.target as HTMLInputElement);
            }}
          ></CustomTextField>
          <CustomTextField
            id={FIELD.PHONENUMBER}
            label={FIELD.PHONENUMBER}
            defaultValue={""}
            handler={(e) => {
              handlePhoneNumberChange(e.target as HTMLInputElement);
            }}
          ></CustomTextField>
          <CustomAlert
            openAlert={openAlert}
            handleCloseAlert={handleCloseAlert}
          ></CustomAlert>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={handleOnSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
