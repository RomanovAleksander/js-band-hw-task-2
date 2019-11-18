import { getTruckById, getTruckIds } from "../utils.js";

export default function getTruckListCallback(callback) {
  const list = [];
  getTruckIds().then((ids) => {
    ids.forEach((id) => {
      getTruckById(id)
        .then((item) => list.push(item))
        .catch((error) => {
          getTruckById(id)
            .then((item) => list.push(item))
            .catch((error) => callback({
              status: 404,
              message: "Error",
            }));
        });
    });
  });
  return callback(list);
}
