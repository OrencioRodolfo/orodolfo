
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('should render a label', () => {
  const wrapper = shallow(
    <App />,
  );
  expect(wrapper).toMatchSnapshot();
});
