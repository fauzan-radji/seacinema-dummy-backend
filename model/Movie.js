import { Model, Field } from "json-modelizer";

export default class Movie extends Model {
  static _table = "movies";
  static schema = {
    title: Field.String,
    description: Field.String,
    price: Field.Number,
    releaseDate: Field.String,
    ageRating: Field.Number,
    poster: Field.String,
  };
}
