import { User } from "../model/index.js";
import { ErrorResponse, AuthResponse } from "../response/index.js";
import { AuthController } from "../controller/index.js";

export default (Route) => {
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

  Route.post({
    description: "Register user",
    path: "/auth/signup",
    callback: AuthController.register,
    body: {
      username: "string",
      email: "string",
      hash: "string",
      birth: "string",
      name: "string",
    },
    query: {},
    headers: {},
    responses: {
      success: AuthResponse.register(User.first()),
      error: ErrorResponse.create("Cannot create user"),
    },
  });
};
