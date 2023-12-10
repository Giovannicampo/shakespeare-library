import { Fragment, ReactElement, useState } from "react";
import Title from "../utility/Title";
import CustomTextField from "../utility/CustomTextField";
import { rows } from "../Dashboard/BooksData";
import { Grid, Paper } from "@mui/material";
import { Book } from "../Dashboard/BooksData";
import BookForm from "./BookForm";

const bookFound = (bookCode: string): [boolean, Book?] => {
  for (const r of rows) {
    if (r.id === bookCode) return [true, r];
  }
  return [false];
};

export default function Prendi(): ReactElement {
  const [bookCode, setBookCode] = useState("");
  const [bookForm, setBookForm] = useState(<></>);

  const handleChangeBookCode = (event: HTMLInputElement): void => {
    setBookCode(event.value);
    const foundAndBook: [boolean, Book?] = bookFound(event.value);
    if (foundAndBook[0])
      setBookForm(<BookForm book={foundAndBook[1] as Book} />);
    else setBookForm(<></>);
  };

  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              marginBottom: "1em",
            }}
          >
            <Title>Scan book</Title>
            <CustomTextField
              id="toScan"
              label="Book code"
              defaultValue=""
              handler={(e) => {
                handleChangeBookCode(e.target as HTMLInputElement);
              }}
            ></CustomTextField>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        {bookForm}
      </Grid>
    </Fragment>
  );
}
