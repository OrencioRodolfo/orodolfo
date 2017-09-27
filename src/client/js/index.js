/* eslint global-require: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './scenes/Home/components/App/App';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./scenes/Home/components/App/App.js', () => {
    const NextApp = require('./scenes/Home/components/App/App.js').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}
