const arrayMap = () => {
  const myArr = [1, 2, 3, 5, 8, 13, 21];

  const newArr = myArr.map(elem => elem + 1);

  console.log(myArr);
  console.log(newArr);
};

arrayMap();

const arrayFilter = () => {
  const myArr = [1, 2, 3, 5, 8, 13, 21];

  const newArr = myArr.filter(elem => elem % 2 === 0);

  console.log(myArr);
  console.log(newArr);
};

// arrayFilter();

const arrayReduce = () => {
  const myArr = [1, 2, 3];

  const startingValue = 0;

  const myVal = myArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue, // Callback function for reduce
    startingValue, // Starting value for the reduce, can be skipped
  );

  console.log(myVal);
};

// arrayReduce();
