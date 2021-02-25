<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-swiper :topImages="topImgs"/>
    <detail-base-info :goods="itemInfo"
      :diamondInfo="diamondInfo" :priceInfo="priceInfo"/>
    <detail-shop :shopInfo="shopInfo" />
    <detail-img-info :imgInfo="detailInfo" />
    <detail-params-info :paramsInfo="paramsInfo" />
    <ul>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
    </ul>
  </div>
</template>

<script>
import DetailNavBar from './childCom/DetailNavBar'
import DetailSwiper from './childCom/DetailSwiper'
import DetailBaseInfo from './childCom/DetailBaseInfo.vue'
import DetailShop from './childCom/DetailShop'
import DetailImgInfo from './childCom/DetailImgInfo'
import DetailParamsInfo from './childCom/DetailParamsInfo'

import { getDetail } from '@/network/detail'

export default {
  name: 'Detail',
  data () {
    return {
      id: null,
      topImgs: [],
      itemInfo: {},
      diamondInfo: {},
      priceInfo: {},
      shopInfo: {},
      detailInfo: {},
      paramsInfo: {}
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShop,
    DetailImgInfo,
    DetailParamsInfo
  },
  created () {
    this.id = this.$route.params.id
    getDetail(this.id).then((res) => {
      const data = res.list[0].data.result
      this.topImgs = data.topImages
      this.itemInfo = data.itemInfo
      this.diamondInfo = data.diamondInfo
      this.priceInfo = data.priceInfo
      this.shopInfo = data.shopInfo
      this.detailInfo = data.detailInfo
      this.paramsInfo = data.itemParams
      console.log(data)
    })
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
