import { Book } from "./BooksData";
import { deleteRow } from "./BooksData";

export default function deleteBook(book: Book) {
    // edit mock data
    deleteRow(book.id);

    // call DELETE, but it doesn't work
    fetch(`http://localhost:3000/books/updateById/${book.id}`, {
    method: "DELETE",
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