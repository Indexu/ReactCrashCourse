import React from 'react';
import { shallow } from 'enzyme';
import nock from 'nock';

import App from '../App';

const TITLE = 'Test';
const CURRENCIES = [
  {
    shortName: 'USD',
    value: 1337,
  },
  {
    shortName: 'EUR',
    value: 666,
  },
];
const CURRENCIES_RESPONSE = {
  results: CURRENCIES,
};

nock('https://apis.is')
  .persist()
  .get('/currency/arion')
  .reply(200, CURRENCIES_RESPONSE);

describe('App', () => {
  it('should render without throwing an error', () => {
    // Arrange
    const wrapper = shallow(<App title={TITLE} />);

    // Act

    // Assert
    expect(wrapper).toBeDefined();
  });

  it('should set the correct state member in generic handler', () => {
    // Arrange
    const expectedContent = 'EXPECTED';
    const mockEvent = {
      target: {
        name: 'content',
        value: expectedContent,
      },
    };

    const wrapper = shallow(<App title={TITLE} />);

    // Act
    wrapper.instance().handleOnChange(mockEvent);

    // Assert
    const { content } = wrapper.instance().state;

    expect(content).toEqual(expectedContent);
  });

  it('should not render currency list when currencies are not available', () => {
    // Arrange
    const wrapper = shallow(<App title={TITLE} />);

    // Act
    wrapper.setState({ currencies: undefined });

    // Assert
    const currencyList = wrapper.find('CurrencyList');

    expect(currencyList).toHaveLength(0);
  });

  it('should render currency list when there are currencies', () => {
    // Arrange
    const wrapper = shallow(<App title={TITLE} />);

    // Act
    wrapper.setState({ currencies: [] });

    // Assert
    const currencyList = wrapper.find('CurrencyList');

    expect(currencyList).toHaveLength(1);
  });

  it('should set currencies after fetching data', done => {
    // Arrange

    const wrapper = shallow(<App title={TITLE} />);
    const instance = wrapper.instance();

    // Act
    instance.fetchCurrencies();

    // Assert
    setTimeout(() => {
      const { currencies } = wrapper.state();

      try {
        expect(currencies).toEqual(CURRENCIES);

        done();
      } catch (ex) {
        done.fail();
      }
    }, 100);
  });

  it('should set currencies after fetching data async', async () => {
    // Arrange

    const wrapper = shallow(<App title={TITLE} />);
    const instance = wrapper.instance();

    // Act
    await instance.fetchCurrenciesAsync();

    // Assert
    const { currencies } = wrapper.state();

    expect(currencies).toEqual(CURRENCIES);
  });
});
