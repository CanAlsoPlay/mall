<template>
  <div>
    <detail-nav-bar/>
    <detail-swiper :topImages="topImgs"/>
    <detail-base-info :goods="itemInfo"
      :diamondInfo="diamondInfo" :priceInfo="priceInfo"/>
  </div>
</template>

<script>
import DetailNavBar from './childCom/DetailNavBar'
import DetailSwiper from './childCom/DetailSwiper'
import DetailBaseInfo from './childCom/DetailBaseInfo.vue'

import { getDetail } from '@/network/detail'

export default {
  name: 'Detail',
  data () {
    return {
      id: null,
      topImgs: [],
      itemInfo: {},
      diamondInfo: {},
      priceInfo: {}
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  created () {
    this.id = this.$route.params.id
    getDetail(this.id).then((res) => {
      const data = res.list[0].data.result
      this.topImgs = data.topImages
      this.itemInfo = data.itemInfo
      this.diamondInfo = data.diamondInfo
      this.priceInfo = data.priceInfo
      console.log(data)
    })
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
