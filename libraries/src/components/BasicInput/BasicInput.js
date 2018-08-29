import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  color: rgb(220, 220, 220);
  font-size: 1.5em;
  border: 2px solid rgb(200, 200, 200);
  border-radius: 0.1em;
  background-color: rgb(20, 20, 20);
  display: block;
  margin: 0 auto;
`;

const BasicInput = props => <Input {...props} />;

BasicInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

BasicInput.defaultProps = {
  value: '',
  placeholder: '',
  disabled: false,
};

export default BasicInput;
