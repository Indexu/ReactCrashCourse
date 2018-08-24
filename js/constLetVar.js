function usingVar() {
  var foo = 'Hello';

  if (true) {
    var foo = 'Goodbye';
  }

  console.log(foo, 'world!');
}

function usingLet() {
  let foo = 'Hello';

  if (true) {
    let foo = 'Goodbye';
  }

  console.log(foo, 'world!');
}

function usingConst() {
  const foo = 'Hello';

  if (true) {
    const foo = 'Goodbye';
  }

  console.log(foo, 'world!');
}

function usingConstError() {
  const foo = 'Hello';

  if (true) {
    foo = 'Goodbye';
  }

  console.log(foo, 'world!');
}

function usingVarHoisting() {
  x = 'Hello';
  console.log(x);
  var x;
}

function conditionalAssignment(value) {
  const foo = value || 'Some default value';

  console.log(foo);
}

usingVar();
// usingLet();
// usingConst();
// usingConstError();
// usingVarHoisting();
// conditionalAssignment('Assigned value!');
// conditionalAssignment();
