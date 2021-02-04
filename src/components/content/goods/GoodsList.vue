<template>
  <div class="goods">
    <goods-list-item :goods-item="item" v-for="(item, index) in goods" :key="index"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style scoped>
.goods {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100vw;
}
</style>
