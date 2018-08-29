import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

import BasicInput from './components/BasicInput/BasicInput';
import CurrencyList from './components/CurrencyList/CurrencyList';

const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  height: 100%;
  width: 80%;
  text-align: center;
`;

const HeaderContainer = styled.div`
  padding: 0;
  width: 100%;
  background-color: rgb(20, 20, 20);
`;

const Title = styled.h1`
  color: rgb(60, 60, 60);
  text-align: center;
  font-size: 10em;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0;
  margin: 0;
`;

const Paragraph = styled.p`
  color: rgb(220, 220, 220);
  text-align: center;
`;

// Button CSS: https://codemyui.com/ghost-button-animation/
const fancyButtonColor = '#0068b2';
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
  border: 3px solid ${fancyButtonColor};
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
    background-color: ${fancyButtonColor};
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

class App extends React.Component {
  state = {
    content: 'Some content',
    currencies: undefined,
  };

  fetchCurrencies = () => {
    axios.get('https://apis.is/currency/arion').then(res => {
      this.setState({
        currencies: res.data.results,
      });
    });
  };

  fetchCurrenciesAsync = async () => {
    const res = await axios.get('https://apis.is/currency/arion');

    this.setState({
      currencies: res.data.results,
    });
  };

  handleOnChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { content, currencies } = this.state;
    const { title } = this.props;

    return (
      <React.Fragment>
        <HeaderContainer>
          <Title>{title}</Title>
        </HeaderContainer>
        <Container>
          <Paragraph>{content}</Paragraph>
          <BasicInput name="content" onChange={this.handleOnChange} value={content} placeholder="Example content..." />
          <FancyButton onClick={this.fetchCurrenciesAsync}>Fetch Currencies</FancyButton>
          <div>{currencies && <CurrencyList data={currencies} baseCurrency="kr." />}</div>
        </Container>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
};
App.defaultProps = {
  title: 'Default Title',
};

export default App;
