require('normalize.css');
require('styles/App.css');

import React, { Component, PropTypes }  from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'


class AppComponent extends Component {

  render() {
    let yeomanImage = require('../images/yeoman.png');
    // var survery = { title: '' }
    var title = 'fdsafads'
    return (
      <div className="index">
        <Header title={title}></Header>
        <img src={yeomanImage} alt="Yeoman Generator1" />
        <div className="notice">Please edit1 <code>src/components/Main.js</code> to get started!</div>
        <Footer></Footer>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
