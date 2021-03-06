import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './index.css';

// Redux imports
import { Provider } from 'react-redux'; // track global store & allow acces from anywhere
import { createStore, applyMiddleware, compose } from 'redux'; // middleware to use thunk
import thunk from 'redux-thunk'; // async redux
// Reducer import
import reducers from './redux/reducers';
// create global store
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
