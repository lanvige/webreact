import React, { Component, PropTypes } from 'react'
import Product from './Product'

class ProductItem extends Component {
  render() {
    const { product } = this.props

    return (
      <div
        style={{ marginBottom: 20 }}>
        <Product
          title={pro3duct.title}
          price={product.price} />
      </div>
    )
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
