import { getTruckById, getTruckIds } from "../utils.js";

export default function getTruckListPromise() {
  const list = [];
  return new Promise(((resolve, reject) => {
    getTruckIds()
      .then((ids) => {
        ids.forEach((id) => {
          getTruckById(id)
            .then((item) => list.push(item))
            .catch((error) => {
              getTruckById(id)
                .then((item) => list.push(item))
                .catch((error) => console.log('Error', error));
            });
        });
        return list;
      })
      .then((list => resolve(list)))
      .catch((error) => reject(error))
  }));
}
