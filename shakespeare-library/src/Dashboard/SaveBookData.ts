import { Book } from "./BooksData";
import { setRow } from "./BooksData";
import { BASE_URL } from "../App";

export default function saveBookData(book: Book) {
  // update mock data
  setRow(book.id, book);

  // call PATCH, but it doesn't work
  fetch(`${BASE_URL}:3000/books/updateById/${book.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "your-api-key",
      "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
    },
    body: JSON.stringify(book)
  })
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log(error));
}
