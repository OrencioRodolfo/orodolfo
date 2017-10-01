import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('App component', () => {
  it('Must render properly', () => {
    const container = shallow(
      <Home />,
    );

    expect(container).toMatchSnapshot();
  });
});
