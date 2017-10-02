import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

describe('Navigation component', () => {
  it('Must render properly', () => {
    const container = shallow(
      <Navigation />,
    );

    expect(container).toMatchSnapshot();
  });
});
