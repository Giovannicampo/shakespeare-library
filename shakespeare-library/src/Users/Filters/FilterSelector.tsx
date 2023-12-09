import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import { Predicate } from "../UsersList";
import { User } from "../UsersData";
import { setFilters } from "../UsersList";
import { FieldsSelect, ActionsSelect } from "./Selectors";

interface FilterSelector {
  readonly handleClose: () => void;
  readonly filter: () => void;
}

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

  const createFilter = () => {
    if (field === "" || action === "" || value === "") return;
    let newFilter: Predicate = () => true;
    switch (field) {
      case "Name":
        if (action == "contains")
          newFilter = (u: User) => u.name.includes(value);
        else newFilter = (u: User) => u.name.startsWith(value);
        break;
      case "Surname":
        if (action == "contains")
          newFilter = (u: User) => u.surname.includes(value);
        else newFilter = (u: User) => u.surname.startsWith(value);
        break;
      case "Phone Number":
        if (action == "contains")
          newFilter = (u: User) => u.phoneNumber.includes(value);
        else newFilter = (u: User) => u.phoneNumber.startsWith(value);
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
