import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';

describe('Home component', () => {
  it('Must render properly', () => {
    const container = shallow(
      <Home getAbout={() => null} />,
    );

    expect(container).toMatchSnapshot();
  });
});
