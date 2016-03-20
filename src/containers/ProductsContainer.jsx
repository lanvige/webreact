import React, { Component } from 'react'
import { connect } from 'react-redux'
import  * as actions from '../actions'

class ProductsContainer extends Component {

  componentDidMount() {
  //   this.props.dispatch(actions.getProducts2());
    this.props.dispatch(actions.getProducts())
  }


  render() {
    console.log('=====render=======')
    console.log(this.props)

    return (
      <div>
        <h3>{this.props.p.title}</h3>
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

  const p  = state.products

  return {
    p

  }
}

export default connect(
  mapStateToProps
)(ProductsContainer)
