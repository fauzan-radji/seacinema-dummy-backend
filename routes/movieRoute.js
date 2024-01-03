import { Movie } from "../model/index.js";
import { ErrorResponse, MovieResponse } from "../response/index.js";
import { MovieController } from "../controller/index.js";

export default (Route) => {
  Route.get({
    description: "Get movie by id",
    path: "/movies/:id",
    callback: MovieController.detail,
    body: {},
    query: {},
    headers: {},
    responses: {
      success: MovieResponse.detail(Movie.first()),
      error: ErrorResponse.create("Not Found"),
    },
  });

  Route.get({
    description: "Get all movies",
    path: "/movies",
    callback: MovieController.all,
    body: {},
    query: {
      page: "number",
      limit: "number",
    },
    headers: {},
    responses: {
      success: MovieResponse.all(Movie.all()),
      error: ErrorResponse.create("Not Found"),
    },
  });

  Route.get({
    description: "Search movies by title",
    path: "/movies/search",
    callback: MovieController.search,
    body: {},
    query: {
      title: "string",
    },
    headers: {},
    responses: {
      success: MovieResponse.search(Movie.all()),
      error: ErrorResponse.create("Not Found"),
    },
  });
};
