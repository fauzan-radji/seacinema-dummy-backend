import { User } from "../model/index.js";
import { UserController } from "../controller/index.js";
import { ErrorResponse, UserResponse } from "../response/index.js";

export default (Route) => {
  Route.get({
    description: "Get user profile",
    path: "/user/me",
    callback: UserController.me,
    body: {},
    query: {},
    headers: {
      Authorization: "Bearer {token}",
    },
    responses: {
      success: UserResponse.me(User.first()),
      error: ErrorResponse.create("User not found"),
    },
  });
};
