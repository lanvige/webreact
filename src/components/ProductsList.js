import React, { Component, PropTypes } from 'react'

class ProductsList extends Component {
  render() {
    const { title } = this.props

    return (
      <div>
        <h3>{title}</h3>
      </div>
    )
  }
}

ProductsList.propTypes = {
  title: PropTypes.string.isRequired
}


export default ProductsList
