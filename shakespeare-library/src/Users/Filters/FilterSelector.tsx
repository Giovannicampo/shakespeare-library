import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import { Predicate } from "../UsersList";
import { User } from "../UsersData";
import { setFilters } from "../UsersList";
import { FieldsSelect, ActionsSelect } from "./Selectors";

export const enum FIELD {
  NAME = "Name",
  SURNAME = "Surname",
  PHONENUMBER = "Phone Number",
}

interface FilterSelector {
  readonly handleClose: () => void;
  readonly filter: () => void;
}

type StringComparator = {
  (u: string, s: string): boolean;
};

export default function FilterSelector(
  props: FilterSelector,
): React.ReactElement {
  const [field, setField] = useState("Name");
  const [action, setAction] = useState("contains");
  const [value, setValue] = useState("");

  const handleFieldChange = (e: HTMLInputElement): void => {
    setField(e.value);
  };

  const handleActionChange = (e: HTMLInputElement): void => {
    setAction(e.value);
  };

  const handleValueChange = (e: HTMLInputElement): void => {
    setValue(e.value);
  };

  const contains: StringComparator = (u: string, s: string): boolean => {
    return u.includes(s);
  };

  const startsWith: StringComparator = (u: string, s: string): boolean => {
    return u.startsWith(s);
  };

  const createFilter = (): void => {
    if (field === "" || action === "" || value === "") return;
    const midFilter: StringComparator =
      action === "contains" ? contains : startsWith;
    let newFilter: Predicate = () => true;
    switch (field) {
      case FIELD.NAME:
        newFilter = (u: User) => midFilter(u.name, value);
        break;
      case FIELD.SURNAME:
        newFilter = (u: User) => midFilter(u.surname, value);
        break;
      case FIELD.PHONENUMBER:
        newFilter = (u: User) => midFilter(u.phoneNumber, value);
        break;
    }
    setFilters(newFilter);
    props.filter();
    props.handleClose();
  };

  return (
    <Fragment>
      <Box sx={{ display: "flex" }}>
        <FieldsSelect
          handler={(e) => {
            handleFieldChange(e.target as HTMLInputElement);
          }}
        ></FieldsSelect>

        <ActionsSelect
          handler={(e) => {
            handleActionChange(e.target as HTMLInputElement);
          }}
          option1={"contains"}
          option2={"starts with"}
        ></ActionsSelect>

        <TextField
          autoFocus
          margin="dense"
          id={"value"}
          label={"insert value"}
          fullWidth
          variant="outlined"
          defaultValue={""}
          onChange={(e) => {
            handleValueChange(e.target as HTMLInputElement);
          }}
        ></TextField>
      </Box>
      <Button variant="outlined" onClick={createFilter}>
        Add filter
      </Button>
    </Fragment>
  );
}
