import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('Must render properly', () => {
    const container = shallow(
      <App />
    );

    expect(container).toMatchSnapshot();
  });
});
