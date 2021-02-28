<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div class="item">
        <i class="icon-service"></i>
        <span>客服</span>
      </div>
      <div class="item">
        <i class="icon-shop"></i>
        <span>店铺</span>
      </div>
      <div class="item">
        <i class="icon-collect"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-right">
      <div class="item cart" @click="addToCart">加入购物车</div>
      <div class="item buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addToCart () {
      // console.log('addToCart')
      this.$emit('addCart')
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  background-color: #fff;
  height: 58px;
  position: relative;
  z-index: 1200;
  display: flex;
  text-align: center;
  line-height: 58px;
}
.bar-left {
  flex: 1;
  display: flex;
}
.bar-left .item {
  flex: 1;
}
.bar-left .item span {
  position: relative;
  top: -22px;
}
.bar-left i {
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 3px;
  background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
}
.bar-left .icon-service {
  background: url('~assets/img/detail/detail_bottom.png') 0 -54px/100%;
}
.bar-left .icon-shop {
  background: url('~assets/img/detail/detail_bottom.png') 0 -98px/100%;
}
.bar-right {
  flex: 1;
  display: flex;
  font-size: 18px;
  color: #fff;
}
.bar-right .item {
  flex: 1;
}
.bar-right .cart {
  background-color: #ffe817;
  color: #333;
}
.bar-right .buy {
  background-color: #ff6699;
}
</style>
