const basic = () => {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved, yay!');
      // reject('Promise rejected, oh noes!');
    }, 1500);
  });

  console.log('Promises are asynchronous');

  myPromise
    .then(res => {
      // Do stuff with the result
      console.log('THEN');
      console.log(res);
    })
    .catch(err => {
      // Do stuff with the error
      console.log('CATCH');
      console.log(err);
    })
    .finally(() => {
      // Do cleanup or something to happen regardless of error/result
      console.log('Promise done!');
    });

  console.log('Promises are very asynchronous');
};

basic();

const multiple = () => {
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

  Promise.all(promises).then(results => {
    // Can also use array destructuring
    console.log(results);
  });
};

// multiple();
