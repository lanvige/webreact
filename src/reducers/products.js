
import { GET_PRODUCTS } from '../constants/ActionTypes'

let defaultPro = {
                    id: 'fdsafdsa',
                    title: 'title_value2',
                    completed: false
                  }

export default function products(state = defaultPro, action) {
  switch (action.type) {
    case GET_PRODUCTS:
     return action.products
    default:
      return state
  }
}
