import { User } from "../model/index.js";
import { ErrorResponse, AuthResponse } from "../response/index.js";
import { AuthController } from "../controller/index.js";

export default (Route) => {
  // http://localhost:3000/api/v1/auth/signin
  Route.post({
    description: "Login user",
    path: "/auth/signin",
    callback: AuthController.login,
    body: {
      username: "string",
      hash: "string",
    },
    query: {},
    headers: {},
    responses: {
      success: AuthResponse.login(User.first()),
      error: ErrorResponse.create("User not found"),
    },
  });
};
