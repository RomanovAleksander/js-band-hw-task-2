import getTruckListCallback from "./requests/callback.js";
import getTruckListPromise from "./requests/promise.js";
import getTruckListAsyncAwait from "./requests/asyncAwait.js";

getTruckListCallback((result, err) => result ? console.log(result) : console.log(err));

getTruckListPromise()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

getTruckListAsyncAwait()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
