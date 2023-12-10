import { v4 as uuidv4 } from "uuid";

export interface User {
  id: string;
  name: string;
  surname: string;
  age: string;
  phoneNumber: string;
  booksIds: string[];
}

// Generate User Data
function createData(
  name: string,
  surname: string,
  age: string,
  phoneNumber: string,
  booksIds: string[],
): User {
  const id = uuidv4();
  const user: User = { id, name, surname, age, phoneNumber, booksIds };
  return user;
}

export let users: User[] = [
  createData("Stefano", "Borzì", "26", "3004005678", []),
  createData("Matteo Jacopo", "Schembri", "26", "3012013456", []),
  createData("Alexia", "Gugliuzzo", "2", "3102101234", []),
  createData("Giovanni", "Fazio", "22", "3202207890", []),
  createData("Alessandro", "Lo Giudice", "21", "3012014567", []),
  createData("Giovanni", "Previtera", "22", "3402301234", []),
  createData("Alice", "Stiglione", "23", "3502001345", []),
  createData("Giulia", "Zuccarello", "22", "3502003123", []),
  createData("Venerando Pio", "Musumeci", "21", "3602004567", []),
  createData("Barbara", "Campo", "10", "3452341234", []),
  createData("Emanuela", "Scavo", "21", "3602005678", []),
  createData("Valeria", "Iacona", "19", "3901237845", []),
  createData("Irene", "Petralia", "20", "3901238547", []),
  createData("Isabella", "Nucifora", "39", "3804561234", []),
  createData("Salvatore", "Campo", "56", "3603345234", []),
];

export function addUser(u: User) {
  users.push(u);
}
