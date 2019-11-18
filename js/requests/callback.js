import data from '../../data.js';
let count = 0;

export default function getTruckListCallback(callback) {
  setTimeout(() => {
    const isError = Math.ceil(Math.random() * 1000) < 100;
    if (isError && count < 2) {
      count++;
      getTruckListCallback(callback);
    }
    if (isError && count >= 2) {
      count = 0;
      callback({
        data: null,
        status: 404,
        message: "Error",
        requests: count
      });
    }
    callback({
      data: data.TRUCKS,
      status: 200,
      message: 'Callback Success',
      requests: count
    });
  }, 1000)
}
