/* eslint global-require: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';

import App from './components/App/App';
import reducers from './reducers';

const store = createStore(reducers);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App/App.js', () => {
    const NextApp = require('./components/App/App.js').default;
    render(NextApp);
  });
}
