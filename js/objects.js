const references = () => {
  const someObj = {
    someKey: 'someVal',
  };

  const myObj = {
    a: 'Hello',
    b: 'World',
    c: someObj,
  };

  const anotherObj = {
    ...myObj,
    d: someObj,
  };

  // Notice that both someObj and anotherObj are const, yet I'm changing their member
  anotherObj.d.someKey = 'what is this';

  console.log(myObj);
  console.log(anotherObj);
  console.log(someObj);
};

references();

// Destructuring
const destructuring = () => {
  const myObj = {
    a: 'Hello',
    b: 'World',
  };

  const { a, b } = myObj;

  console.log(a);
  console.log(b);
};

// destructuring();

const destructuringRest = () => {
  const myObj = {
    a: 'Hello',
    b: 'World',
  };

  const { a, ...rest } = myObj;

  console.log(a);
  console.log(rest);
};

// destructuringRest();

const destructuringArray = () => {
  const myArr = ['I am first', 'I am second', 'I am third', 'I am forth'];
  const [first, second, ...rest] = myArr;

  console.log(first);
  console.log(second);
  console.log(rest);
};

// destructuringArray();

const destructuringRename = () => {
  const myObj = {
    a: 'Hello',
    b: 'World',
  };

  const { a: customName, b } = myObj;

  console.log(customName);
  console.log(b);
};

// destructuringRename();

const destructuringNested = () => {
  const myObj = {
    a: {
      nestedField: 'Hello',
    },
    b: 'World',
  };

  const {
    a: { nestedField },
    b,
  } = myObj;

  console.log(nestedField);
  console.log(b);
};

// destructuringNested();

const destructuringParameters = () => {
  const myFunc = ({ a, b, ...rest }) => {
    console.log(a);
    console.log(b);
    console.log(rest);
  };

  const myObj = {
    a: 'Hello',
    b: 'World',
    c: '!',
    d: 'yes',
    e: 'no',
  };

  myFunc(myObj);
};

// destructuringParameters();

const destructuringExtract = () => {
  const myObj = {
    a: 'Hello',
    b: 'World',
    c: '!',
    d: 'yes',
    e: 'no',
  };

  const { a, b, ...fieldsWeCareAbout } = myObj;

  console.log(fieldsWeCareAbout);
};

// destructuringExtract();

const loopingTheAncientWay = () => {
  const myObj = {
    a: 'Hello',
    b: 'World',
    c: '!',
    d: 'yes',
    e: 'no',
  };

  // Have to check if the object has the property due to JavaScript prototype
  // Have to look up the key in the object

  for (var key in myObj) {
    if (myObj.hasOwnProperty(key)) {
      console.log(key, myObj[key]);
    }
  }
};

// loopingTheAncientWay();

const loopingTheOldWay = () => {
  const myObj = {
    a: 'Hello',
    b: 'World',
    c: '!',
    d: 'yes',
    e: 'no',
  };

  // Have to look up the key in the object

  Object.keys(myObj).forEach(key => {
    console.log(key, myObj[key]);
  });
};

// loopingTheOldWay();

const loopingTheNewWay = () => {
  const myObj = {
    a: 'Hello',
    b: 'World',
    c: '!',
    d: 'yes',
    e: 'no',
  };

  // Have to look up the key in the object

  for (const key of Object.keys(myObj)) {
    console.log(key, myObj[key]);
  }
};

// loopingTheNewWay();

const loopingTheNewCoolWay = () => {
  const myObj = {
    a: 'Hello',
    b: 'World',
    c: '!',
    d: 'yes',
    e: 'no',
  };

  // Swag

  Object.entries(myObj).forEach(([key, value]) => {
    console.log(key, value);
  });
};

// loopingTheNewCoolWay();
