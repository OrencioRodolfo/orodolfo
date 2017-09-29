import React from 'react';
import { shallow } from 'enzyme';
import Social from './Social';

describe('Social icons component', () => {
  it('Must render properly', () => {
    const wrapper = shallow(
      <Social />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
