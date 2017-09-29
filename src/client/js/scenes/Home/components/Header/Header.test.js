import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('Must render the left content of a pill button', () => {
  const wrapper = shallow(
    <Header>
      Left content
    </Header>,
  );
  expect(wrapper).toMatchSnapshot();
});
