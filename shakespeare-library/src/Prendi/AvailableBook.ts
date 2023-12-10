import { rows } from "../Dashboard/BooksData";
import { BASE_URL } from "../App";

export function makeBookAvailable(bookId: string) {
    // update mock data
    for(const r of rows) {
        if(r.id === bookId) {
            r.available = true;
            break;
        }
    }

    // call GET API, but it doesn't work
    fetch(`${BASE_URL}:3000/books/makeAvailable/${bookId}`)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log(error));
}