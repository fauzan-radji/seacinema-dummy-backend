export default class AuthResponse {
  static login(user) {
    return {
      statusCode: 200,
      message: "Log In!",
      data: user,
      token: user.token,
    };
  }
}
