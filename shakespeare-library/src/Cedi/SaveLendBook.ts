import { users } from "../Users/UsersData";
import { Book, rows } from "../Dashboard/BooksData";

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

  // call PATCH API
}
