import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import * as theme from '../../theme';
import Home from '../../scenes/Home/components/Home/Home';

const App = props => (
  <Provider store={props.store}>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </Provider>
);

App.propTypes = {
  store: PropTypes.any.isRequired,
};

export default App;
