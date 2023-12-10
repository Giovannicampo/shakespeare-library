import { ReactElement, useState } from "react";
import { Book } from "../Dashboard/BooksData";
import { Button, Grid, Paper } from "@mui/material";
import Title, { SubTitle } from "../utility/Title";
import { makeBookAvailable } from "./AvailableBook";

interface BookFormProps {
  book: Book;
}

export default function BookForm(props: BookFormProps): ReactElement {
  const [available, setAvailable] = useState(props.book.available);

  const button: ReactElement = (
    <Button
      variant="outlined"
      disabled={available}
      onClick={() => {
        makeBookAvailable(props.book.id);
        setAvailable(true);
      }}
    >
      Set Available
    </Button>
  );

  return (
    <Grid item xs={12} md={6}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Title>{`Book ${props.book.id}`}</Title>
        <SubTitle>{props.book.name}</SubTitle>
        <SubTitle>{props.book.author}</SubTitle>
        <SubTitle>{props.book.genre}</SubTitle>
        <SubTitle>
          {available ? "It is already available!" : "Edit to available?"}
        </SubTitle>
        {button}
      </Paper>
    </Grid>
  );
}
