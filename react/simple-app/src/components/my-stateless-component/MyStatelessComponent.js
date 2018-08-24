import React from 'react';
import './MyStatelessComponent.css';

const MyStatelessComponent = props => {
  const doSomethingWithNumber = (num, anotherNum) => {
    return num ** anotherNum;
  };

  const { number } = props;

  return (
    <React.Fragment>
      <span>{doSomethingWithNumber(number, 2)}</span>
      <span>{doSomethingWithNumber(number, number)}</span>
      <span>{doSomethingWithNumber(number, number + 1)}</span>
    </React.Fragment>
  );
};

export default MyStatelessComponent;
