export interface Book {
  id: string;
  name: string;
  author: string;
  genre: string;
  available: boolean;
}

// Generate Book Data
function createData(
  id: string,
  name: string,
  author: string,
  genre: string,
  available: boolean,
): Book {
  const book: Book = { id, name, author, genre, available };
  return book;
}

export const rows: Book[] = [
  createData("TH00", "Il miglio verde", "Stephen King", "Thriller", true),
  createData("SF00", "Io, Robot", "Isaac Asimov", "Sci-Fi", true),
  createData(
    "NA00",
    `Cent'anni di solitudine`,
    "Gabriel Garcia Marquez",
    "Narrativa",
    true,
  ),
  createData("NA01", "I fiori del male", "Charles Baudelaire", "Narrativa", true),
  createData("SF01", "1984", "George Orwell", "Sci-Fi", true),
  createData("NA02", "Il nome della rosa", "Umberto Eco", "Narrativa", true),
  createData(
    "SA00",
    "Fisica quantistica per poeti",
    "Christopher Hill",
    "Saggistica",
    true,
  ),
  createData(
    "FA00",
    "Il Signore degli Anelli - La Compagnia dell'anello",
    "J.R.R. Tolkien",
    "Fantasy",
    true,
  ),
  createData(
    "FA01",
    "Il Signore degli Anelli - Il mio Tesoro",
    "J.R.R. Tolkien",
    "Fantasy",
    true,
  ),
];

export function setRow(index: string, book: Book): void {
  rows.filter((r) => r.id === index).map((b) => (b = book));
}

export function deleteRow(index: string): void {
  const idx = rows.findIndex((row) => row.id === index);
  rows.splice(idx, 1);
}
