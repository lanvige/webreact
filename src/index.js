import 'core-js/fn/object/assign';

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import getProducts from './reducers/products'

import App from './containers/App';




const store = createStore(
  getProducts
)

const rootEl = document.getElementById('root')


// Render the main component into the dom
ReactDOM.render(
  <Provider store={store.getState()}>
    <App />
  </Provider>,
  rootEl
);
