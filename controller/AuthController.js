import { User } from "../model/index.js";
import { ErrorResponse, AuthResponse } from "../response/index.js";

export default class AuthController {
  static login(req, res) {
    const { username, hash } = req.body;
    const user = User.findBy("username", username);

    if (!user) {
      return res.status(404).json(ErrorResponse.create("User not found"));
    }

    if (user.password !== hash) {
      return res.status(401).json(ErrorResponse.create("Wrong password"));
    }

    return res.status(200).json(AuthResponse.login(user));
  }

  static register(req, res) {
    const { username, email, hash, birth, name } = req.body;

    const user = User.create({
      username,
      email,
      password: hash,
      birth,
      age: 20,
      name,
      token: generateToken(64),
    });

    return res.status(200).json(AuthResponse.register(user));
  }
}

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
