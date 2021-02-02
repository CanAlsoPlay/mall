<template>
  <div class="goods">
    <goods-list-item :goods-item="item" v-for="(item, index) in goods" :key="index"/>
    {{goods}}
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
