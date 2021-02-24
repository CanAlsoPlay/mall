<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="now-price" :style="{color: priceInfo.eventPriceColor}"
        >{{priceInfo.nowPrice | showPrice}}</span>
      <span class="old-price">{{priceInfo.oldPrice}}</span>
    </div>
    <div class="info-other">
      <span>收藏{{goods.cFav}}</span>
      <span>销量{{goods.extra.sales}}</span>
      <span>{{goods.extra.express}}</span>
    </div>
    <div class="info-service">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default () {
        return {}
      }
    },
    diamondInfo: {
      type: Object,
      default () {
        return {}
      }
    },
    priceInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    showPrice (price) {
      return '￥' + price
    }
  }
}
</script>

<style scoped>
.base-info {
  margin: 0 10px;
}
.info-title {
  font-size: 20px;
  font-weight: bold;
  color: #222;
}
.info-price {
  margin-top: 10px;
}
.now-price {
  font-size: 18px;
  margin-right: 10px;
}
.old-price {
  text-decoration: line-through;
}
.info-other {
  margin-top: 10px;
  display: flex;
}
.info-other span {
  flex: 1;
}
</style>
