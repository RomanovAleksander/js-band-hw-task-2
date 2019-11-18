import data from '../../data.js';
let count = 0;

export default async function getTruckListAsyncAwait() {
  let isError = Math.ceil(Math.random()*1000) < 100;

  let result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isError && count < 2) {
        count++;
        reject();
        getTruckListAsyncAwait();
      }
      if (isError && count >= 2) {
        count = 0;
        reject({
          data: null,
          status: 404,
          message: "Error",
          requests: count
        });
      }
      resolve({
        data: data.TRUCKS,
        status: 200,
        message: 'Async Success',
        requests: count
      });
    }, 1000);
  });

  return result;
}
