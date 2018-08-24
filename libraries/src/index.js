import React from 'react';
import ReactDOM from 'react-dom';

import './GlobalStyles';
import App from './App';

const wrapper = document.getElementById('root');
if (wrapper) {
  ReactDOM.render(<App title="Libraries" />, wrapper);
}

if (module.hot) {
  module.hot.accept();
}
