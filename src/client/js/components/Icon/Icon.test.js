import React from 'react';
import { shallow } from 'enzyme';
import Icon from './Icon';

it('Must render a star icon', () => {
  const wrapper = shallow(
    <Icon icon="star" />,
  );
  expect(wrapper).toMatchSnapshot();
});
