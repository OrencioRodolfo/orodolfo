import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import App from './App';

describe('App component', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);

  it('Must render properly', () => {
    const store = mockStore({});

    const container = shallow(
      <App store={store} />,
    );

    expect(container).toMatchSnapshot();
  });
});
