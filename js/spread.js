const arrays = () => {
  const myArr = [1, 2, 3, 5, 8, 13, 21];

  const anotherArr = [...myArr, 34];

  console.log(myArr);
  console.log(anotherArr);
};

arrays();

const basicObject = () => {
  const myObj = {
    a: 'Hello',
    b: 'World',
  };

  const anotherObj = { ...myObj, c: '!' };

  console.log(myObj);
  console.log(anotherObj);
};

// basicObject();

const overwriteObject = () => {
  const myObj = {
    a: 'Hello',
    b: 'World',
  };

  const anotherObj = { ...myObj, a: 'Goodbye' };

  console.log(myObj);
  console.log(anotherObj);
};

// overwriteObject();
