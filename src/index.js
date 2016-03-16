import 'core-js/fn/object/assign';

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import AppContainer from './containers/App';



const store = createStore(reducer)

const rootEl = document.getElementById('app')


// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  rootEl
);
