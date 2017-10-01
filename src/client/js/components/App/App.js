import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as theme from '../../theme';
import reducers from '../../reducers';

import Home from '../../scenes/Home/components/Home/Home';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </Provider>
);

export default App;
