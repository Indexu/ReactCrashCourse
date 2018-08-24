const double = () => {
  const foo = '1';
  const bar = 1;

  if (foo == bar) {
    console.log('EQUAL');
  } else {
    console.log('NOT EQUAL');
  }
};

double();

const triple = () => {
  const foo = '1';
  const bar = 1;

  if (foo === bar) {
    console.log('EQUAL');
  } else {
    console.log('NOT EQUAL');
  }
};

triple();
