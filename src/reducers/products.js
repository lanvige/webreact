import { combineReducers } from 'redux'
import { GET_PRODUCTS } from '../constants/ActionTypes'

export function getProducts(state, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return Object.assign({}, state, {
        products: [
          {
            "id": 1,
            "title": "iPad 4 Mini",
            "price": 500.01,
            "inventory": 2
          },
          {
            "id": 2,
            "title": "iPad 4 Mini",
            "price": 500.01,
            "inventory": 2
          }
        ]
      })
    default:
      return state
  }
}
