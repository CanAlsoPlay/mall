<template>
  <div id="home">
    <NavBar class="home-nav"><template v-slot:center><div>购物街</div></template></NavBar>
    <TabControl class="tab-control2" ref="tabControl2" v-show="isTabFixed"
          @tabClick="tabClick" :titles="['综合', '销量', '新品']" />
    <Scroll class="content" ref="scroll" :probe-type="3"
      @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <HomeSwiper :banners="banners" @swiperImageLoad="swiperImgLoad"/>
      <RecommendView :recommends="recommends"/>
      <FeatureView/>
      <TabControl class="tab-control" ref="tabControl"
          @tabClick="tabClick" :titles="['综合', '销量', '新品']" />
      <goods-list :goods="goods[currentType].list"/>
    </Scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '@/components/content/tabControl/TabControl.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'

import HomeSwiper from './childComp/HomeSwiper'
import RecommendView from './childComp/RecommendView'
import FeatureView from './childComp/FeatureView'

import { getHomeMultidata, getHomeGoods } from '@/network/home'
// import { debounce } from '@/common/utils'
import { itemListernerMixin, backTopMixin } from '@/common/mixin'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll
  },
  data () {
    return {
      recommends: [],
      banners: [],
      goods: {
        pop: { page: 0, list: [] },
        sell: { page: 0, list: [] },
        new: { page: 0, list: [] }
      },
      currentType: 'pop',
      isShowBackTop: true,
      tabControlOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    }
  },
  mixins: [itemListernerMixin, backTopMixin],
  methods: {
    tabClick (index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'sell'
          break
        case 2:
          this.currentType = 'new'
          break
        default:
          break
      }
      this.$refs.tabControl.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
      this.getHomeGoods1(this.currentType)
    },
    contentScroll (position) {
      // console.log(position)
      this.isShowBackTop = (-position.y) > 1000
      // 判断tab是否吸顶
      this.isTabFixed = (-position.y) > this.tabControlOffsetTop
    },
    loadMore () {
      // console.log('loadMore')
      this.getHomeGoods1(this.currentType)
    },
    swiperImgLoad () {
      this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop
    },
    getHomeMultidata1 () {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods1 (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
        // console.log(res)
        const data = res.list[0].result.wall.docs
        for (const iterator of data) {
          this.goods[type].list.push(iterator)
        }
        this.goods[type].page += 1
        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp()
      })
    }
  },
  created () {
    // 请求多个数据
    this.getHomeMultidata1()
    // 请求商品数据
    this.getHomeGoods1('pop')
    // this.getHomeGoods1('sell')
    // this.getHomeGoods1('new')
  },
  destroyed () {
    console.log('home destroyed')
  },
  activated () {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated () {
    // 1.保存y值
    this.saveY = this.$refs.scroll.getScrollY()
    // 2.取消全局事件监听
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  mounted () {
    // 监听图片加载完成
    // 对监听的事件进行保存
    // this.itemImgListener = () => {
    //   debounce(this.$refs.scroll.refresh())
    // }
    // this.$bus.$on('itemImageLoad', this.itemImgListener)
  }
}
</script>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
/* .Fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
} */
.tab-control2 {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
ul.list {
  margin-bottom: 55px;
}
.content {
  height: calc(100vh - 93px);
  overflow: hidden;
}
</style>
