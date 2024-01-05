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

  static detail(movie) {
    return {
      statusCode: 200,
      message: `Success Get Movie id : ${movie.id} Details`,
      data: movie,
    };
  }

  static seat(movie) {
    return {
      statusCode: 200,
      message: `Success Get MovieId ${movie.id} seats`,
      data: {
        ...movie,
        seats: [
          { id: 4, seatNumber: 4, isBook: true },
          { id: 5, seatNumber: 5, isBook: true },
        ],
      },
    };
  }
}
