import { Model, Field } from "json-modelizer";

class User extends Model {
  static _table = "users";
  static schema = {
    name: Field.String,
    username: Field.String,
    email: Field.String,
    password: Field.String,
    birth: Field.String,
    age: Field.Number,
    token: Field.String,
  };
}

export default User;
