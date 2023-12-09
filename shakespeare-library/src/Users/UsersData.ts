export interface User {
  id: number;
  name: string;
  surname: string;
  age: number;
  phoneNumber: string;
  booksIds: number[];
}

// Generate User Data
function createData(
  id: number,
  name: string,
  surname: string,
  age: number,
  phoneNumber: string,
  booksIds: number[]
): User {
  const user: User = { id, name, surname, age, phoneNumber, booksIds };
  return user;
}

export let users: User[] = [
  createData(0, "Stefano", "Borzì", 26, "3004005678", []),
  createData(1, "Matteo Jacopo", "Schembri", 26, "3012013456", []),
  createData(2, "Alexia", "Gugliuzzo", 21, "3102101234", []),
  createData(4, "Giovanni", "Fazio", 22, "3202207890", []),
  createData(5, "Alessandro", "Lo Giudice", 21, "3012014567", []),
  createData(6, "Giovanni", "Previtera", 22, "3402301234", []),
  createData(7, "Alice", "Stiglione", 23, "3502001345", []),
  createData(8, "Giulia", "Zuccarello", 22, "3502003123", []),
  createData(9, "Venerando Pio", "Musumeci", 21, "3602004567", []),
  createData(10, "Barbara", "Campo", 10, "3452341234", [])
];
