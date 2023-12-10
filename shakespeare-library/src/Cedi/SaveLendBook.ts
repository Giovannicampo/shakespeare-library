import { users } from "../Users/UsersData";
import { Book, rows } from "../Dashboard/BooksData";

import { BASE_URL } from "../App";

export function saveLendBook(userId: string, book: Book): void {
  // update mock data
  for (const r of rows) {
    if (r.id === book.id) {
      r.available = false;
      break;
    }
  }
  for (const u of users) {
    if (u.id === userId) {
      u.booksIds.push(book.id);
    }
  }

  // call GET, but it doesn't work
  fetch(`${BASE_URL}:3000/books/makeNotAvailable/${book.id}`)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

  // call PATCH, but it doesn't work
  fetch(`${BASE_URL}:3000/users/updateById/addBook/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "your-api-key",
      "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
    },
    body: JSON.stringify(book),
  })
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}
