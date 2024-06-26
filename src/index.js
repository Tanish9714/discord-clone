import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import ReactDOM from 'react-dom';
import store from './app/store';  

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

