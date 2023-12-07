// Generate Order Data
function createData(
  id: number,
  name: string,
  author: string,
  genre: string,
  available: boolean,
  user?: string,
) {
  return { id, name, author, genre, available, user };
}

export const rows = [
  createData(0, "Il miglio verde", "Stephen King", "Thriller", true),
  createData(1, "Io, Robot", "Isaac Asimov", "Sci-Fi", true),
  createData(2, `Cent'anni di solitudine`, "Gabriel Garcia Marquez", "Narrativa", true),
  createData(3, "I fiori del male", "Charles Baudelaire", "Narrativa", true),
  createData(4, "1984", "George Orwell", "Sci-Fi", true),
  createData(5, 'Il nome della rosa', 'Umberto Eco', "Narrativa", true),
  createData(6, "Fisica quantistica per poeti", "Christopher Hill", "Saggistica", true)
];
