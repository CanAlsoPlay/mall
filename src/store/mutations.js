import { ADD_COUNTER, ADD_NEW } from './mutation-types'
export default {
  [ADD_COUNTER] (state, payload) {
    payload.count++
  },
  [ADD_NEW] (state, payload) {
    state.cartList.push(payload)
  }
}
