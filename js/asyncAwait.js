const basic = async () => {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved, yay!');
      // reject('Promise rejected, oh noes!');
    }, 1500);
  });

  try {
    const res = await myPromise;
    console.log('THEN');
    console.log(res);
  } catch (err) {
    console.log('CATCH');
    console.log(err);
  }
};

// basic();

const multiple = async () => {
  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const createDummyPromise = number => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Promise ${number} resolved`);
      }, randomInt(1000, 3000));
    });
  };

  const promises = [];

  for (let i = 0; i < 20; i++) {
    promises.push(createDummyPromise(i + 1));
  }

  console.log('Promises created');

  const results = await Promise.all(promises);

  console.log(results);
};

// multiple();

const forAwait = async () => {
  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const createDummyPromise = number => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Promise ${number} resolved`);
      }, randomInt(1000, 1000 * number));
    });
  };

  const promises = [];

  for (let i = 0; i < 20; i++) {
    promises.push(createDummyPromise(i + 1));
  }

  console.log('Promises created');

  // Loop through the promises in order and wait for the CURRENT promise to resolve
  // Other promises are still running even though you are waiting for the current one
  for await (let result of promises) {
    console.log(result);
  }
};

forAwait();
