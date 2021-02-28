<template>
  <div class="cart-list">
    <div v-for="(item, index) in cartList" :key="index">
      <cart-list-item :item="item"/>
    </div>
  </div>
</template>

<script>
import cartListItem from './cartListItem'
import { mapGetters } from 'vuex'
export default {
  name: 'CartList',
  components: {
    cartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  }
}
</script>
<style scoped>
</style>
