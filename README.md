# Seacinema dummy-backend

This is a dummy backend for [Seacinema app](https://github.com/fauzan-radji/react-movie-app).

## Setup

1. Clone the repository

   ```bash
      # SSH
      git clone git@github:fauzan-radji/seacinema-dummy-backend.git

      # HTTPS
      git clone https://github.com/fauzan-radji/seacinema-dummy-backend.git
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory or just copy the `.env.example` file
4. Seed the database

   ```bash
   npm run seed
   ```

5. Start the server

   ```bash
   npm start
   ```

6. The server should be running on `http://localhost:3000`

## User

| Name   | Username | Password |
| ------ | -------- | -------- |
| Fauzan | fauzan   | 12345678 |
| Fazrul | fazrul   | 12345678 |

## Endpoints

The default port is `3000`, but can be changed by setting the `PORT` environment variable.

### User

#### Login

```http
POST /auth/signin
```

##### Request body

| Parameter | Type   | Required           |
| --------- | ------ | ------------------ |
| username  | string | :white_check_mark: |
| hash      | string | :white_check_mark: |

##### Response

###### Success

```json
{
  "statusCode": 200,
  "message": "Log In!",
  "data": {
    "id": 1,
    "name": "Fauzan",
    "username": "fauzan",
    "email": "fauzan@email.com",
    "password": "12345678",
    "birth": "2003-04-10",
    "age": 20,
    "token": "I60SMOeyJR8hxysxvG7eQQlMEuxdHVLn46plxx9RnVPi4Jl9Y3MBXrlHknlnEvVt",
    "createdAt": "2024-01-03T05:36:01.813Z",
    "updatedAt": "2024-01-03T05:36:01.813Z"
  },
  "token": "I60SMOeyJR8hxysxvG7eQQlMEuxdHVLn46plxx9RnVPi4Jl9Y3MBXrlHknlnEvVt"
}
```

###### Error

```json
{
  "message": "User not found"
}
```

#### Register

```http
POST /auth/signup
```

##### Request body

| Parameter | Type   | Required           |
| --------- | ------ | ------------------ |
| username  | string | :white_check_mark: |
| email     | string | :white_check_mark: |
| hash      | string | :white_check_mark: |
| birth     | string | :white_check_mark: |
| name      | string | :white_check_mark: |

##### Response

###### Success

```json
{
  "statusCode": 201,
  "message": "User Created",
  "data": {
    "id": 1,
    "name": "Fauzan",
    "username": "fauzan",
    "email": "fauzan@email.com",
    "password": "12345678",
    "birth": "2003-04-10",
    "age": 20,
    "token": "I60SMOeyJR8hxysxvG7eQQlMEuxdHVLn46plxx9RnVPi4Jl9Y3MBXrlHknlnEvVt",
    "createdAt": "2024-01-03T05:36:01.813Z",
    "updatedAt": "2024-01-03T05:36:01.813Z"
  }
}
```

###### Error

```json
{
  "message": "Cannot create user"
}
```

#### Get User Profile

```http
GET /user/me
```

##### Request

###### Headers

| Name          | Parameter | Type   | Required           | Example        |
| ------------- | --------- | ------ | ------------------ | -------------- |
| Authorization | token     | string | :white_check_mark: | Bearer {token} |

##### Response

###### Success

```json
{
  "statusCode": 200,
  "message": "Success Fetch User Profile",
  "data": {
    "id": 1,
    "name": "Fauzan",
    "username": "fauzan",
    "email": "fauzan@email.com",
    "password": "12345678",
    "birth": "2003-04-10",
    "age": 20,
    "token": "I60SMOeyJR8hxysxvG7eQQlMEuxdHVLn46plxx9RnVPi4Jl9Y3MBXrlHknlnEvVt",
    "createdAt": "2024-01-03T05:36:01.813Z",
    "updatedAt": "2024-01-03T05:36:01.813Z",
    "balance": "1000010",
    "Tickets": [
      {
        "id": "d43bed4e-3633-4fc8-839d-89d61ab0cf3e",
        "bookAt": "2023-07-13T14:41:00.293Z",
        "cancelAt": "2023-07-13T14:43:04.301Z",
        "isCancel": true,
        "Seats": {
          "seatNumber": 7,
          "id": "0ea07e82-ff6f-4146-98bc-8066d2e474fa",
          "isBook": false,
          "Movie": {
            "title": "Avatar: The Way of Water"
          }
        }
      }
    ]
  }
}
```

###### Error

```json
{
  "message": "User not found"
}
```

### Movies

#### Get All Movies

```http
GET /movies
```

##### Request

###### Query

| Parameter | Type   | Required | Default |
| --------- | ------ | -------- | ------- |
| page      | number | :x:      | 1       |
| limit     | number | :x:      | 6       |

##### Response

###### Success

```json
{
  "statusCode": 200,
  "message": "Success Fetch All Movies",
  "page": 1,
  "length": 6,
  "totalData": 6,
  "totalPage": 1,
  "data": [
    {
      "id": 1,
      "title": "Avatar",
      "description": "A paraplegic marine dispatched to the moon Pandora on a unique mission...",
      "price": 10000,
      "releaseDate": "2009-12-18",
      "ageRating": 13,
      "poster": "https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "createdAt": "2024-01-03T05:36:01.819Z",
      "updatedAt": "2024-01-03T05:36:01.819Z"
    }
    // ... (data for other movies)
  ]
}
```

###### Error

```json
{
  "message": "Not Found"
}
```

#### Search Movies by Title

```http
GET /movies/search
```

##### Request

###### Query

| Parameter | Type   | Required           |
| --------- | ------ | ------------------ |
| title     | string | :white_check_mark: |

##### Response

###### Success

```json
{
  "statusCode": 200,
  "message": "Success Search Movies",
  "data": [
    {
      "id": 1,
      "title": "Avatar",
      "description": "A paraplegic marine dispatched to the moon Pandora on a unique mission...",
      "price": 10000,
      "releaseDate": "2009-12-18",
      "ageRating": 13,
      "poster": "https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "createdAt": "2024-01-03T05:36:01.819Z",
      "updatedAt": "2024-01-03T05:36:01.819Z"
    }
    // ... (data for other movies)
  ]
}
```

###### Error

```json
{
  "message": "Not Found"
}
```

#### Get Movie by ID

```http
GET /movies/:id
```

##### Request

##### Response

###### Success

```json
{
  "statusCode": 200,
  "message": "Success Get Movie id : 1 Details",
  "data": {
    "id": 1,
    "title": "Avatar",
    "description": "A paraplegic marine dispatched to the moon Pandora on a unique mission...",
    "price": 10000,
    "releaseDate": "2009-12-18",
    "ageRating": 13,
    "poster": "https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "createdAt": "2024-01-03T05:36:01.819Z",
    "updatedAt": "2024-01-03T05:36:01.819Z"
  }
}
```

###### Error

```json
{
  "message": "Not Found"
}
```

### Tickets

#### Get Seats by Movie ID

```http
GET /tickets/seat/:id
```

##### Request

##### Response

###### Success

```json
{
  "statusCode": 200,
  "message": "Success Get MovieId 1 seats",
  "data": {
    "id": 1,
    "title": "Avatar",
    "description": "A paraplegic marine dispatched to the moon Pandora on a unique mission...",
    "price": 10000,
    "releaseDate": "2009-12-18",
    "ageRating": 13,
    "poster": "https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "createdAt": "2024-01-03T05:36:01.819Z",
    "updatedAt": "2024-01-03T05:36:01.819Z",
    "seats": [
      {
        "id": 4,
        "seatNumber": 4,
        "isBook": true
      },
      {
        "id": 5,
        "seatNumber": 5,
        "isBook": true
      }
    ]
  }
}
```

###### Error

```json
{
  "message": "Not Found"
}
```
