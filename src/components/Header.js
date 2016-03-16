import React, { PropTypes, Component } from 'react'

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
        <h1>{this.props.title}</h1>
      </header>
    )
  }
}


Header.propTypes = {
  text: PropTypes.string.isRequired
}

export default Header
