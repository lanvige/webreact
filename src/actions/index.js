import shop from '../sources/shop'
import * as types from '../constants/ActionTypes'


let defaultPro = {
                    id: "fdsafdsa",
                    title: "title_value2",
                    completed: false
                  }


export function getProducts() {
  return {
    type: types.GET_PRODUCTS,
    products: defaultPro
  }
}

function getProducts2() {
  console.log("=======")
  dispatch(getProducts());
}

function addToCartUnsafe(productId) {
  return {
    type: types.ADD_TO_CART,
    productId
  }
}

export function addToCart(productId) {
  return (dispatch, getState) => {
    if (getState().products.byId[productId].inventory > 0) {
      dispatch(addToCartUnsafe(productId))
    }
  }
}

export function checkout(products) {
  return (dispatch, getState) => {
    const cart = getState().cart

    dispatch({
      type: types.CHECKOUT_REQUEST
    })
    shop.buyProducts(products, () => {
      dispatch({
        type: types.CHECKOUT_SUCCESS,
        cart
      })
      // Replace the line above with line below to rollback on failure:
      // dispatch({ type: types.CHECKOUT_FAILURE, cart })
    })
  }
}
