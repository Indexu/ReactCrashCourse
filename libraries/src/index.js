import React from 'react';
import ReactDOM from 'react-dom';

import './GlobalStyles';
import App from './App';

ReactDOM.render(<App title="Libraries" />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
