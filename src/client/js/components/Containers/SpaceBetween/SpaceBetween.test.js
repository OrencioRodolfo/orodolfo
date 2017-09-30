import React from 'react';
import { shallow } from 'enzyme';
import SpaceBw from './SpaceBetween';

describe('Space between container component', () => {
  it('Must render a non empty container', () => {
    const wrapper = shallow(
      <SpaceBw>
        <p>Some content</p>
      </SpaceBw>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
