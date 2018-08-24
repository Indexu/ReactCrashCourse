import React from 'react';
import './CustomInput.css';

const CustomInput = props => {
  const { name, value, onChange } = props;

  return <input className="customInput" name={name} value={value} onChange={onChange} />;
};

export default CustomInput;
