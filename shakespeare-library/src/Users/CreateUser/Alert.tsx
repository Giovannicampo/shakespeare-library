import { Collapse, Alert } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface AlertProps {
    openAlert: boolean;
    handleCloseAlert: () => void;
}

export default function CustomAlert(props: AlertProps): React.ReactElement {
  return (
    <Collapse in={props.openAlert}>
      <Alert
        severity="error"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={props.handleCloseAlert}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        Error on input data! Check again!
      </Alert>
    </Collapse>
  );
}
