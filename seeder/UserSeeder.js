import { User } from "../model/index.js";

User.clear();

User.create({
  name: "Fauzan",
  username: "fauzan",
  email: "fauzan@email.com",
  password: "12345678",
  birth: "2003-04-10",
  age: 20,
  token: generateToken(64),
});

User.create({
  name: "Fazrul",
  username: "fazrul",
  email: "fazrul@email.com",
  password: "12345678",
  birth: "2003-03-02",
  age: 20,
  token: generateToken(64),
});

function generateToken(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
