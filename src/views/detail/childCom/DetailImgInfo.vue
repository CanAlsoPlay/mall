<template>
  <div v-if="Object.keys(imgInfo).length !== 0" class="shop-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{imgInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{imgInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img @load="detailImgLoad" v-for="(item, index) in imgInfo.detailImage[0].list" :key="index"
        :src="item" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailImgInfo',
  props: {
    imgInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    detailImgLoad () {
      this.$emit('detailImgLoad')
    }
  }
}
</script>

<style scoped>
.info-desc {
  padding: 10px 15px;
}
.info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}
.info-desc .start {
  float: left;
}
.info-desc .end {
  float: right;
}
.info-desc .start::before {
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}
.info-desc .end::after {
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  right: 0;
  top: 0;
}
.info-key {
  margin: 0 15px 10px 10px;
}
.info-list img {
  width: 100%;
}
</style>
