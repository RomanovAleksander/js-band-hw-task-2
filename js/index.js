import getTruckListCallback from "./requests/callback.js";
import getTruckListPromise from "./requests/promise.js";
import getTruckListAsyncAwait from "./requests/asyncAwait.js";

function getTruckIdsCallback(callback) {
  setTimeout(() => {
    callback([1,2,5,9,67]);
  }, 1000)
}

function getTruckIds() {
  return new Promise((resolve => {
    getTruckIdsCallback(result => resolve(result));
  }));
}

function getTruckByIdCallback(id, callback) {
  setTimeout(() => {
    const isError = Math.ceil(Math.random()*1000) < 100;
    if (isError) {
      return callback(undefined, "Internal error");
    }
    callback({
      id: id,
      model: `truck ${id}`
    });
  })
}

function getTruckById(id) {
  return new Promise ((resolve, reject) => {
    getTruckByIdCallback(id, (result, error) => {
      return result ? resolve(result) : reject(error)
    })
  })
}

getTruckById(9)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

getTruckListCallback((result, err) => result ? console.log(result) : console.log(err));

getTruckListPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

getTruckListAsyncAwait()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
