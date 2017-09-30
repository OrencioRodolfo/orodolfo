import React from 'react';
import { shallow } from 'enzyme';
import Restricited from './Restricited';

describe('Restricited container component', () => {
  it('Must render a non empty container', () => {
    const wrapper = shallow(
      <Restricited>
        <p>Some content</p>
      </Restricited>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
