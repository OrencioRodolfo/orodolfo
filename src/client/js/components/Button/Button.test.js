import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
// import PillLeft from './PillLeft/PillLeft';
// import PillRight from './PillRight/PillRight';

it('Must render a button', () => {
  const wrapper = shallow(
    <Button>
      My button
    </Button>,
  );
  expect(wrapper).toMatchSnapshot();
});

it('Must render a pill button', () => {
  const wrapper = shallow(
    <Button>
      <span>s</span>
    </Button>,
  );
  expect(wrapper).toMatchSnapshot();
});
