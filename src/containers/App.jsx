require('normalize.css');
require('styles/App.css');


import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import ProductsContainer from './ProductsContainer'


class AppComponent extends Component {
  render() {
    var title = 'Shopping Cart Example'

    return (
      <div>
        <Header title={title}/>
        <hr />

        // content
        <ProductsContainer />

        <hr />
        <Footer />
      </div>

    );
  }
}

export default AppComponent;
