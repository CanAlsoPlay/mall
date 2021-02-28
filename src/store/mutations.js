import { ADD_COUNTER, ADD_NEW } from './mutation-types'
export default {
  [ADD_NEW] (state, payload) {
    payload.count++
  },
  [ADD_COUNTER] (state, payload) {
    state.cartList.push(payload)
  }
}
