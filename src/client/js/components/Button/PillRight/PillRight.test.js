import React from 'react';
import { shallow } from 'enzyme';
import PillRight from './PillRight';

it('Must render the left content of a pill button', () => {
  const wrapper = shallow(
    <PillRight>
      Left content
    </PillRight>,
  );
  expect(wrapper).toMatchSnapshot();
});
