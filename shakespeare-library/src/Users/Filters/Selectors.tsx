import MenuItem from "@mui/material/MenuItem";
import { TextField } from "@mui/material";

interface FieldsSelectProps {
  readonly handler: React.ChangeEventHandler;
}

export const FieldsSelect = function (
  props: FieldsSelectProps,
): React.ReactElement {
  return (
    <TextField
      id="fields"
      select
      label="Field"
      defaultValue={"Name"}
      sx={{ marginTop: "0.5em", minWidth: "8em", marginRight: "1em" }}
      onChange={props.handler}
    >
      <MenuItem key={"Name"} value={"Name"}>
        Name
      </MenuItem>
      <MenuItem key={"Surname"} value={"Surname"}>
        Surname
      </MenuItem>
      <MenuItem key={"Phone Number"} value={"Phone Number"}>
        Phone Number
      </MenuItem>
    </TextField>
  );
};

interface ActionsSelectProps {
  readonly handler: React.ChangeEventHandler;
  readonly option1: string;
  readonly option2: string;
}

export const ActionsSelect = function (props: ActionsSelectProps): React.ReactElement {
  return (
    <TextField
      id="actions"
      select
      label="Action"
      defaultValue={props.option1}
      sx={{ marginTop: "0.5em", minWidth: "6em", marginRight: "1em" }}
      onChange={props.handler}
    >
      <MenuItem key={"option1"} value={props.option1}>
        {props.option1}
      </MenuItem>
      <MenuItem key={"option2"} value={props.option2}>
        {props.option2}
      </MenuItem>
    </TextField>
  );
};
