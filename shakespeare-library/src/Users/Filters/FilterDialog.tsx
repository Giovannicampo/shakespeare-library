import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Predicate } from "../UsersList";
import FilterSelector from "./FilterSelector";

interface FilterProps {
  readonly openFilter: boolean;
  readonly handleCloseFilter: () => void;
  readonly setFilters: (newFilters: Predicate) => void;
  readonly filter: () => void;
}

export default function FilterDialog(props: FilterProps): React.ReactElement {
  return (
    <React.Fragment>
      <Dialog open={props.openFilter} onClose={props.handleCloseFilter}>
        <DialogTitle>Filters</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Set the following filters as you prefer.
          </DialogContentText>
          <FilterSelector
            handleClose={props.handleCloseFilter}
            filter={props.filter}
          ></FilterSelector>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleCloseFilter}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
