import React, { PropTypes, Component } from 'react'

import './header.css'
import LogoImg from './logo.png'

class Header extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      text: this.props.text || ''
    }
  }

  render() {
    return (
      <header className="header">
        <img src={LogoImg} />
        <h1>{this.props.title}</h1>
      </header>
    )
  }
}


Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
