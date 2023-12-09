export interface Book {
  id: number;
  name: string;
  author: string;
  genre: string;
  available: boolean;
}

// Generate Book Data
function createData(
  id: number,
  name: string,
  author: string,
  genre: string,
  available: boolean,
): Book {
  const book: Book = { id, name, author, genre, available };
  return book;
}

export let rows: Book[] = [
  createData(0, "Il miglio verde", "Stephen King", "Thriller", true),
  createData(1, "Io, Robot", "Isaac Asimov", "Sci-Fi", true),
  createData(
    2,
    `Cent'anni di solitudine`,
    "Gabriel Garcia Marquez",
    "Narrativa",
    true,
  ),
  createData(3, "I fiori del male", "Charles Baudelaire", "Narrativa", true),
  createData(4, "1984", "George Orwell", "Sci-Fi", true),
  createData(5, "Il nome della rosa", "Umberto Eco", "Narrativa", true),
  createData(
    6,
    "Fisica quantistica per poeti",
    "Christopher Hill",
    "Saggistica",
    true,
  ),
  createData(
    7,
    "Il Signore degli Anelli - La Compagnia dell'anello",
    "J.R.R. Tolkien",
    "Fantasy",
    true,
  ),
  createData(
    8,
    "Il Signore degli Anelli - Il mio Tesoro",
    "J.R.R. Tolkien",
    "Fantasy",
    true,
  ),
];

export function setRow(index: number, book: Book): void {
  rows[index] = book;
}

export function deleteRow(index: number): void {
  const idx = rows.findIndex((row) => row.id === index);
  rows.splice(idx, 1);
}
