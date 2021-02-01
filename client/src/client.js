import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';

const store = configureStore();

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderMethod(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);


