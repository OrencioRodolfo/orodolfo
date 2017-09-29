import React from 'react';
import { shallow } from 'enzyme';
import PillLeft from './PillLeft';

describe('Left pill button component', () => {
  it('Must render the left content of a pill button', () => {
    const wrapper = shallow(
      <PillLeft>
        Left content
      </PillLeft>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
