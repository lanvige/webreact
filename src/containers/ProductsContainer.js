import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import  * as actions from '../actions'

class ProductsContainer extends Component {

  componentDidMount() {
  //   this.props.dispatch(actions.getProducts2());

    let defaultPro = {
                    id: "fdsafdsa",
                    title: "title_value2",
                    completed: false
                  }

    this.props.dispatch(actions.getProducts())
  }


  render() {
    console.log('=====render=======')
    console.log(this.props)

    return (
      <div>
        <h3>{this.props.products.title}</h3>
      </div>
    )
  }
}

// ProductsContainer.propTypes = {
//   title: PropTypes.string.isRequired
// }



const mapStateToProps = (state) => {
  console.log('======state======')
  console.log(state)



  return {
    products: state.products

  }
}

export default connect(
  mapStateToProps
)(ProductsContainer)
