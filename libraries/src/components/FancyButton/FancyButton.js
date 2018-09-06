import PropTypes from 'prop-types';
import styled from 'styled-components';

// Button CSS: https://codemyui.com/ghost-button-animation/
const FancyButton = styled.button`
  margin: 1em 0;
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  width: 270px;
  font-weight: bold;
  padding: 14px 0px;
  border: 3px solid ${({ color }) => color};
  border-radius: 2px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
  z-index: 2;
  background-color: rgb(20, 20, 20);
  color: rgb(220, 220, 220);

  &:before {
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: '';
    background-color: ${({ color }) => color};
    z-index: -1;
  }

  &:hover {
    &:before {
      -webkit-transition: 0.5s all ease;
      transition: 0.5s all ease;
      left: 0;
      right: 0;
      opacity: 1;
    }
  }
  &:focus {
    &:before {
      -webkit-transition: 0.5s all ease;
      transition: 0.5s all ease;
      left: 0;
      right: 0;
      opacity: 1;
    }
  }
`;

FancyButton.propTypes = {
  color: PropTypes.string,
};

FancyButton.defaultProps = {
  color: '#0068b2',
};

export default FancyButton;
