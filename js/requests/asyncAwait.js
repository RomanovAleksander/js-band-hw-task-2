import { getTruckById, getTruckIds } from "../utils.js";

export default async function getTruckListAsyncAwait() {
  const ids = await getTruckIds();
  const list = [];

  for (let id of ids) {
    try {
      const item = await getTruckById(id);
      list.push(item);
    } catch (error) {
      try {
        const item = await getTruckById(id);
        list.push(item);
      } catch (error) {
        console.log('Error', error);
      }
    }
  }
  return list;
}
