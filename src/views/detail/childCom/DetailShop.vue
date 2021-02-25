<template>
  <div v-if="Object.keys(shopInfo).length !== 0" class="shop-info">
    <div class="services">
      <div class="service-item" v-for="(item, index) in shopInfo.services" :key="index">
        <span><img :src="item.icon" alt=""></span>
        <span>{{item.name}}</span>
      </div>
    </div>

    <div class="shop">
      <div class="shop-title">
        <span><img :src="shopInfo.shopLogo" alt=""></span>
        <span class="shop-name">{{shopInfo.name}}</span>
      </div>
      <div class="shop-detail">
        <span class="cSells">
          <span>{{shopInfo.cSells}}
          <div>总销量</div></span>
        </span>
        <span class="cGoods">
          <span>{{shopInfo.cGoods}}
          <div>全部宝贝</div></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShop',
  props: {
    shopInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.shop-info {
  margin: 0 10px;
}
.services {
  display: flex;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(0, 0, 0, .2);
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
}
.services img {
  height: 12px;
  width: 12px;
}
.service-item:not(:last-child) {
  flex: 1;
}
.shop {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
}
.shop-title img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.shop-title .shop-name {
  font-size: 24px;
  position: relative;
  top: -30px;
  font-weight: bold;
  /* vertical-align: center; */
}
.cSells {
  font-size: 18px;
}
.cGoods {
  font-size: 18px;
  margin-left: 10px;
}
.shop-detail {
  display: flex;
}
</style>
