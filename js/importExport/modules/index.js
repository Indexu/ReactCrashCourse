// CommonJS

const requireAll = () => {
  const constants = require('./constants');

  console.log(constants.foo);
  console.log(constants.bar);
};

requireAll();

const requireDestructuring = () => {
  const { foo, bar } = require('./constants');

  console.log(foo);
  console.log(bar);
};

// requireDestructuring();
