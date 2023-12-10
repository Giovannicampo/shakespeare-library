import { ReactElement } from "react";
import { users } from "../Users/UsersData";
import {
  TextField,
  Autocomplete,
  AutocompleteRenderInputParams,
} from "@mui/material";

interface AutocompleteOption {
  label: string;
}

const allUsers: AutocompleteOption[] = [];

const setAllUsers = (): void => {
  for (const u of users) {
    allUsers.push({ label: `${u.name} ${u.surname}` });
  }
};

setAllUsers();

interface UserBoxProps {
  readonly handleOnSelect: (e: HTMLSelectElement) => void;
}

export default function UserBox(props: UserBoxProps): ReactElement {
  return (
    <Autocomplete
      autoComplete
      onSelect={(e) => props.handleOnSelect(e.target as HTMLSelectElement)}
      id="user-box"
      options={allUsers}
      sx={{ width: 300 }}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <TextField {...params} label="Users" />
      )}
    />
  );
}
