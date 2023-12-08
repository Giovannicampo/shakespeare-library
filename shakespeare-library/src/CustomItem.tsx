import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { CONTEXT } from './App';

interface CustomItemProps {
  readonly children?: React.ReactNode;
  readonly context: CONTEXT;
  readonly handleContext: (context: CONTEXT) => void;
}

export default function CustomItem(props: CustomItemProps): React.ReactElement {
  return (
  <ListItemButton onClick={() => props.handleContext(props.context)}>
    <ListItemIcon>
      {props.children}
    </ListItemIcon>
    <ListItemText primary={props.context} />
  </ListItemButton>
  );
}
