/* eslint global-require: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./components/App/App.js', () => {
    const NextApp = require('./components/App/App.js').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}
