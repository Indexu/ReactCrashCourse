import React from 'react';
import { shallow } from 'enzyme';

import BasicInput from '../BasicInput';

const DEFAULT_NAME = 'DEFAULT_NAME';

describe('BasicInput', () => {
  it('should render without throwing an error', () => {
    // Arrange
    const wrapper = shallow(<BasicInput name={DEFAULT_NAME} onChange={() => {}} />).dive();

    // Act

    // Assert
    expect(wrapper).toBeDefined();
  });

  it('should contain an input element', () => {
    // Arrange
    const wrapper = shallow(<BasicInput name={DEFAULT_NAME} onChange={() => {}} />).dive();

    // Act
    const inputElement = wrapper.find('input');

    // Assert
    expect(inputElement).toHaveLength(1);
  });

  it('should call onChange handler with correct information', () => {
    // Arrange
    const mockEvent = {
      target: {
        name: DEFAULT_NAME,
        value: 'EXPECTED',
      },
    };
    const mockOnChange = jest.fn();

    const wrapper = shallow(<BasicInput name={DEFAULT_NAME} onChange={mockOnChange} />).dive();

    // Act
    wrapper.find('input').simulate('change', mockEvent);

    // Assert
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(mockEvent);
  });
});
