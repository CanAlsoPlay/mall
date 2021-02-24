<template>
  <div>
    <detail-nav-bar/>
    <detail-swiper :topImages="topImgs"/>
  </div>
</template>

<script>
import DetailNavBar from './childCom/DetailNavBar'
import DetailSwiper from './childCom/DetailSwiper'

import { getDetail } from '@/network/detail'
export default {
  name: 'Detail',
  data () {
    return {
      id: null,
      topImgs: []
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper
  },
  created () {
    this.id = this.$route.params.id
    getDetail(this.id).then((res) => {
      console.log(res)
      const data = res.list[0].data.result
      this.topImgs = data.topImages
    })
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
