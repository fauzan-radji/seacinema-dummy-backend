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
}
