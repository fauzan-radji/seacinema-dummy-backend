import { Movie } from "../model/index.js";
import { MovieResponse } from "../response/index.js";

export default class MovieController {
  static all(req, res) {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const totalPage = Math.ceil(Movie.all().length / limit);

    const movies = Movie.all().slice((page - 1) * limit, page * limit);

    return res.status(200).json(MovieResponse.all(movies, page, totalPage));
  }

  static search(req, res) {
    const title = req.query.title;
    const movies = Movie.all().filter((movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );

    return res.status(200).json(MovieResponse.search(movies));
  }
}
