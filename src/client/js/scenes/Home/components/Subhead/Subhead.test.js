import React from 'react';
import { shallow } from 'enzyme';
import Subhead from './Subhead';

describe('Subhead component', () => {
  it('Must render properly', () => {
    const wrapper = shallow(
      <Subhead />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
