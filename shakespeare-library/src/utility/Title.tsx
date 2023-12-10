import * as React from "react";
import Typography from "@mui/material/Typography";

interface TitleProps {
  children?: React.ReactNode;
}

export default function Title(props: TitleProps): React.ReactElement {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

export function SubTitle(props: TitleProps): React.ReactElement {
  return (
    <Typography component="h2" variant="subtitle1" color="neutral" gutterBottom>
      {props.children}
    </Typography>
  );
}
