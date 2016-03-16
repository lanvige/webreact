import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

class ProductsContainer extends Component {
  render() {
    const { products } = this.props
    return (
      <ProductsList title="Products">
        {products.map(product =>
          <ProductItem
            key={product.id}
            product={product} />
        )}
      </ProductsList>
    )
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired
}


export default connect(
  //
)(ProductsContainer)
