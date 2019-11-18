export function getTruckIdsCallback(callback) {
  setTimeout(() => {
    callback([1,2,5,9,67]);
  }, 1000)
}

export function getTruckIds() {
  return new Promise((resolve => {
    getTruckIdsCallback(result => resolve(result));
  }));
}

export function getTruckByIdCallback(id, callback) {
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

export function getTruckById(id) {
  return new Promise ((resolve, reject) => {
    getTruckByIdCallback(id, (result, error) => {
      result ? resolve(result) : reject(error);
    })
  })
}
