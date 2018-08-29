import React from 'react';
import { shallow, mount } from 'enzyme';

import CurrencyList from '../CurrencyList';

describe('CurrencyList', () => {
  it('should render without throwing an error', () => {
    // Arrange
    const wrapper = shallow(<CurrencyList data={[]} baseCurrency="kr." />).dive();

    // Act

    // Assert
    expect(wrapper).toBeDefined();
  });

  it('should render correct amount of data', () => {
    // Arrange
    const mockData = [
      {
        shortName: 'test1',
        value: 1,
      },
      {
        shortName: 'test2',
        value: 2,
      },
      {
        shortName: 'test3',
        value: 3,
      },
    ];

    const wrapper = mount(<CurrencyList data={mockData} baseCurrency="kr." />);

    // Act
    const li = wrapper.find('li');
    const span = wrapper.find('span');

    // Assert
    expect(li).toHaveLength(mockData.length);
    expect(span).toHaveLength(mockData.length * 2);
  });
});
