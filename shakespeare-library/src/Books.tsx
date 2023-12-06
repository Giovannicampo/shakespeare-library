import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(
  id: number,
  name: string,
  author: string,
  available: boolean,
  user?: string,
) {
  return { id, name, author, available, user };
}

const rows = [
  createData(0, "Il miglio verde", "Stephen King", true),
  createData(1, "Io, Robot", "Isaac Asimov", true),
  createData(2, `Cent'anni di solitudine`, "Gabriel Garcia Marquez", true),
  createData(3, "I fiori del male", "Charles Baudelaire", true),
  createData(4, "1984", "George Orwell", true),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Books() {
  return (
    <React.Fragment>
      <Title>Books</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Author</TableCell>
            <TableCell align="right">Availability</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.author}</TableCell>
              <TableCell align="right">{`${
                row.available ? "yes" : "no"
              }`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
