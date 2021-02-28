<template>
  <div id="detail">
    <scroll class="content" ref="scroll">
      <detail-nav-bar/>
      <detail-swiper :topImages="topImgs"/>
      <detail-base-info :goods="itemInfo"
        :diamondInfo="diamondInfo" :priceInfo="priceInfo"/>
      <detail-shop :shopInfo="shopInfo" />
      <detail-img-info :imgInfo="detailInfo" />
      <detail-params-info :paramsInfo="paramsInfo" />
      <detail-comment-info :commentInfo="commentInfo"/>
      <goods-list :goods="recommends"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll.vue'
import { itemListernerMixin } from '@/common/mixin'

import DetailNavBar from './childCom/DetailNavBar'
import DetailSwiper from './childCom/DetailSwiper'
import DetailBaseInfo from './childCom/DetailBaseInfo.vue'
import DetailShop from './childCom/DetailShop'
import DetailImgInfo from './childCom/DetailImgInfo'
import DetailParamsInfo from './childCom/DetailParamsInfo'
import DetailCommentInfo from './childCom/DetailCommentInfo'
import GoodsList from '@/components/content/goods/GoodsList.vue'

import { getDetail, getRecommend } from '@/network/detail'

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
      paramsInfo: {},
      commentInfo: {},
      recommends: []
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShop,
    DetailImgInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    Scroll
  },
  mixins: [itemListernerMixin],
  created () {
    this.id = this.$route.params.id
    // 请求详情数据
    getDetail(this.id).then((res) => {
      const data = res.list[0].data.result
      this.topImgs = data.topImages
      this.itemInfo = data.itemInfo
      this.diamondInfo = data.diamondInfo
      this.priceInfo = data.priceInfo
      this.shopInfo = data.shopInfo
      this.detailInfo = data.detailInfo
      this.paramsInfo = data.itemParams
      if (data.rateInfo.cRate !== null) {
        this.commentInfo = data.rateInfo
      }
      console.log('getDetail', data)
    })
    // 请求推荐数据
    getRecommend().then((res) => {
      const data = res.list[0].data.list
      for (const iterator of data) {
        this.recommends.push(iterator)
      }
      console.log('getRecommend', this.recommends)
    })
  },
  destroyed () {
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  methods: {
  }
}
</script>

<style scoped>
.content {
  height: calc(100vh - 49px);
  overflow: hidden;
}
</style>
