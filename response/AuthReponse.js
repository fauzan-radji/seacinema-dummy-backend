export default class AuthResponse {
  static login(user) {
    return {
      statusCode: 200,
      message: "Log In!",
      data: user,
      token: user.token,
    };
  }

  static register(user) {
    return {
      statusCode: 201,
      message: "User Created",
      data: user,
    };
  }
}
