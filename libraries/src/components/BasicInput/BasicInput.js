import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  color: rgb(100, 100, 100);
  font-size: 1.5em;
  border: 1px solid rgb(200, 200, 200);
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
