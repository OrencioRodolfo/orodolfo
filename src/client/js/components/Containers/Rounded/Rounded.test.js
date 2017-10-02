import React from 'react';
import { shallow } from 'enzyme';
import Rounded from './Rounded';

describe('Rounded container component', () => {
  it('Must render a non empty container', () => {
    const wrapper = shallow(
      <Rounded>
        <p>Some content</p>
      </Rounded>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
