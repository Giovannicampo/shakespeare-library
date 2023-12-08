import { Book } from "./BooksData";
import { rows } from "./BooksData";

export default function saveBookData(book: Book) {
    console.log(book);
    
    // update mock data
    rows.filter(r => r.id === book.id).forEach(b => console.log(b));
}