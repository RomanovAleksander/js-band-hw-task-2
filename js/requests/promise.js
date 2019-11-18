import data from '../../data.js';
let count = 0;

export default function getTruckListPromise() {
  const isError = Math.ceil(Math.random() * 1000) < 100;

  return new Promise(((resolve, reject) => {
    setTimeout(() => {
      if (isError && count < 2) {
        count++;
        reject();
        getTruckListPromise();
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
        message: 'Promise Success',
        requests: count
      });
    }, 1000);
  }))
}
