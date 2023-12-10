import { User, addUser } from "../UsersData";
import { BASE_URL } from "../../App";

export default function saveUserData(user: User): void {
  // update mock data
  addUser(user);

  // call POST, but it doesn't work
  fetch(`${BASE_URL}:3000/users/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "your-api-key",
      "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}
