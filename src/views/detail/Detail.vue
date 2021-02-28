<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="detailNav"/>
    <scroll class="content" ref="scroll" :probe-type="3"
      @scroll="contentScroll">
      <detail-swiper :topImages="topImgs"/>
      <detail-base-info :goods="itemInfo"
        :diamondInfo="diamondInfo" :priceInfo="priceInfo"/>
      <detail-shop :shopInfo="shopInfo" />
      <detail-img-info @detailImgLoad="detailImageLoad" :imgInfo="detailInfo" />
      <detail-params-info ref="params" :paramsInfo="paramsInfo" />
      <detail-comment-info ref="comment" :commentInfo="commentInfo"/>
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll.vue'
import { itemListernerMixin } from '@/common/mixin'
import { debounce } from '@/common/utils'

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
      recommends: [],
      themeTopYs: [],
      currentIndex: 0
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
      // console.log('getDetail', data)
    })
    // 请求推荐数据
    getRecommend().then((res) => {
      const data = res.list[0].data.list
      for (const iterator of data) {
        this.recommends.push(iterator)
      }
      // console.log('getRecommend', this.recommends)
    })
  },
  destroyed () {
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  methods: {
    titleClick (index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
    },
    getThemeTopYs () {
      this.themeTopYs = []
      this.themeTopYs.push('0')
      if (this.$refs.params.$el.offsetTop === undefined) {
        this.themeTopYs.push('360')
      } else {
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      }
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE.toString())
    },
    detailImageLoad () {
      // console.log('detailImageLoad')
      debounce(this.$refs.scroll.refresh())
      debounce(this.getThemeTopYs())
    },
    contentScroll (position) {
      const posY = -position.y
      const length = this.themeTopYs.length
      for (let i = 0; i < length - 1; i++) {
        if (this.currentIndex !== i &&
          (posY > this.themeTopYs[i] &&
          posY < this.themeTopYs[i + 1])) {
          this.currentIndex = i
          this.$refs.detailNav.currentIndex = this.currentIndex
        }
      }
    }
  }
}
</script>

<style scoped>
.content {
  height: calc(100vh - 93px);
  overflow: hidden;
}
</style>
