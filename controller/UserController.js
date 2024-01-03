import { User } from "../model/index.js";
import { UserResponse } from "../response/index.js";

export default class UserController {
  static me(req, res) {
    const token = req.headers.authorization.split(" ")[1];

    const user = User.findBy("token", token);

    res.status(200).json(UserResponse.me(user));
  }
}
