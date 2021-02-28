<template>
  <div class="cart-item">
    <div class="item-selector">
      <!-- <CheckButton class="item-selector"/> -->
    </div>
    <div class="item-img">
      <img :src="item.image" alt="">
    </div>
    <div class="item-info">
      <div class="item-title">{{item.title}}</div>
      <div class="info-bottom">
        <div class="item-price">￥{{item.price}}</div>
        <div class="item-count">×{{item.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CartListItem',
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
<style scoped>
.cart-item {
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  display: flex;
}
/* .item-selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
} */
.item-img img {
  width: 80px;
  height: 100px;
}
.item-info {
  flex: 1;
  margin-left: 10px;
}
.item-info .item-title {
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 18px;
  font-weight: bold;
}
.info-bottom {
  display: flex;
  margin-top: 20px;
  font-size: 20px;
}
.item-price {
  flex: 1;
  color: orange;
}
</style>
