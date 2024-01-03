import Route from "./Route.js";

import initAuthRoute from "./authRoute.js";
import initMovieRoute from "./movieRoute.js";
import initUserRoute from "./userRoute.js";

initAuthRoute(Route);
initMovieRoute(Route);
initUserRoute(Route);

export default Route.router;
