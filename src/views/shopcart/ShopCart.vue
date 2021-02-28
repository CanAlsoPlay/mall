<template>
  <div>
    <NavBar class="cart-nav"><div slot="center">购物街({{cartLength}})</div></NavBar>
    <cart-list />
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import cartList from './childComp/cartList'

import { mapGetters } from 'vuex'
export default {
  name: 'ShopCart',
  components: {
    NavBar,
    cartList
  },
  computed: {
    ...mapGetters(['cartLength'])
  }
}
</script>
<style scoped>
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
