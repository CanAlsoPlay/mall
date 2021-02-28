import { ADD_COUNTER, ADD_NEW } from './mutation-types'
export default {
  addToCart (context, payload) {
    const oldProduct = context.state.cartList
      .find(item => item.id === payload.id)
    if (oldProduct) {
      context.commit(ADD_COUNTER, oldProduct)
    } else {
      payload.count = 1
      context.commit(ADD_NEW, payload)
    }
  }
}
