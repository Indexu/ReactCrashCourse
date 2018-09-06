import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

import BasicInput from './components/BasicInput/BasicInput';
import CurrencyList from './components/CurrencyList/CurrencyList';
import FancyButton from './components/FancyButton/FancyButton';

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
