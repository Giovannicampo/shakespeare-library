import { rows } from "../Dashboard/BooksData";
import { users } from "../Users/UsersData";
import { BASE_URL } from "../App";

export function makeBookAvailable(bookId: string) {
  // update mock data
  for (const r of rows) {
    if (r.id === bookId) {
      r.available = true;
      break;
    }
  }

  for (const u of users) {
    if (u.booksIds.some((id) => id === bookId)) {
      u.booksIds = u.booksIds.filter((id) => id !== bookId);
      break;
    }
  }

  // call GET API, but it doesn't work
  fetch(`${BASE_URL}:3000/books/makeAvailable/${bookId}`)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}
