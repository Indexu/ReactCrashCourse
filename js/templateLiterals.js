const concat = () => {
  const foo = 'Hello';
  const bar = 'World';

  const normalConcat = foo + ' ' + bar;
  const templateLiteralConcat = `${foo} ${bar}`;

  console.log(normalConcat);
  console.log(templateLiteralConcat);
};

concat();

const multiLine = () => {
  const normalMultiline = 'This is \n\
  a normal multi-line string';

  const templateLiteralMultiline = `This is
  a template literal multi-line string`;

  console.log(normalMultiline);
  console.log(templateLiteralMultiline);
};

// multiLine();
