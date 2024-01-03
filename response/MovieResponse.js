export default class MovieResponse {
  static all(movies, page = 1, totalPage = 1) {
    return {
      statusCode: 200,
      message: "Success Fetch All Movies",
      page: page,
      length: movies.length,
      totalData: movies.length,
      totalPage: totalPage,
      data: movies,
    };
  }

  static search(movies) {
    return {
      statusCode: 200,
      message: "Success Search Movies",
      data: movies,
    };
  }
}
