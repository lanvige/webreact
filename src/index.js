import 'core-js/fn/object/assign';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import configureStore from './configureStore';
import AppContainer from './containers/App';




const store = configureStore();


const rootEl = document.getElementById('app')


// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  rootEl
);
