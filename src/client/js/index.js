/* eslint global-require: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './scenes/Home/components/App/App';
import * as theme from './theme';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./scenes/Home/components/App/App.js', () => {
    const NextApp = require('./scenes/Home/components/App/App.js').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}
