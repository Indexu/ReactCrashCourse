import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('App', () => {
  it('should render without throwing an error', () => {
    // Arrange
    const wrapper = shallow(<App />).dive();

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

    const wrapper = shallow(<App />);

    // Act
    wrapper.instance().handleOnChange(mockEvent);

    // Assert
    const { content } = wrapper.instance().state;

    expect(content).toEqual(expectedContent);
  });
});
