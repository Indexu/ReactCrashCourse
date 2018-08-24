this.foo = 'Hello World';

// This
function normalFunctionThis() {
  console.log(this.foo);
}

const arrowFunctionThis = () => {
  console.log(this.foo);
};

normalFunctionThis();
arrowFunctionThis();

// Returning
function normalFunctionReturn() {
  return 'Normal Return';
}

const arrowFunctionReturn = () => {
  return 'Arrow Return';
};

const betterArrowFunctionReturn = () => 'Better Arrow Return';

// console.log(normalFunctionReturn());
// console.log(arrowFunctionReturn());
// console.log(betterArrowFunctionReturn());

// Parameters
function normalFunctionParam(foo) {
  console.log(foo);
}

function normalFunctionParams(foo, bar) {
  console.log(foo, bar);
}

const arrowFunctionParam = foo => {
  console.log(foo);
};

const arrowFunctionParams = (foo, bar) => {
  console.log(foo, bar);
};

// normalFunctionParam('Hello');
// normalFunctionParams('Hello', 'World');
// arrowFunctionParam('Hello');
// arrowFunctionParams('Hello', 'World');
