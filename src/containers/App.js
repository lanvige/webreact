require('normalize.css');
require('styles/App.css');


import React, { Component } from 'react'
import ProductsContainer from './ProductsContainer'
// import Product from '../components/Product'


class AppComponent extends Component {
  render() {
    var title = 'Shopping Cart Example'

    return (
      <div>
        <h2>{title}</h2>
        <hr />
        <ProductsContainer />
      </div>
    );
  }
}

export default AppComponent;
