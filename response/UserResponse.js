export default class UserResponse {
  static me(user) {
    return {
      statusCode: 200,
      message: "Success Fetch User Profile",
      data: {
        ...user,
        balance: "1000010",
        Tickets: [
          {
            id: "d43bed4e-3633-4fc8-839d-89d61ab0cf3e",
            bookAt: "2023-07-13T14:41:00.293Z",
            cancelAt: "2023-07-13T14:43:04.301Z",
            isCancel: true,
            Seats: {
              seatNumber: 7,
              id: "0ea07e82-ff6f-4146-98bc-8066d2e474fa",
              isBook: false,
              Movie: {
                title: "Avatar: The Way of Water",
              },
            },
          },
        ],
      },
    };
  }
}
