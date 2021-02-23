<template>
  <div id="home">
    <NavBar class="home-nav"><template v-slot:center><div>购物街</div></template></NavBar>
    <Scroll class="content" ref="scroll" :probe-type="3"
      @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <HomeSwiper :banners="banners" />
      <RecommendView :recommends="recommends"/>
      <FeatureView/>
      <TabControl class="tab-control"
          @tabClick="tabClick" :titles="['综合', '销量', '新品']" />
      <goods-list :goods="goods[currentType].list"/>
      <ul class="list">
        <li>3333333333333</li>
        <li>3333333333333</li>
        <li>3333333333333</li>
        <li>3333333333333</li>
        <li>3333333333333</li>
        <li>3333333333333</li>
        <li>3333333333333</li>
        <li>3333333333333</li>
      </ul>
    </Scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '@/components/content/tabControl/TabControl.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'
import BackTop from '@/components/content/backTop/BackTop.vue'

import HomeSwiper from './childComp/HomeSwiper'
import RecommendView from './childComp/RecommendView'
import FeatureView from './childComp/FeatureView'

import { getHomeMultidata, getHomeGoods } from '@/network/home'
import { debounce } from '@/common/utils'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
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
      isShowBackTop: true
    }
  },
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
      this.getHomeGoods1(this.currentType)
    },
    backClick () {
      // console.log('backClick')
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll (position) {
      // console.log(position)
      this.isShowBackTop = -position.y > 1000
    },
    loadMore () {
      // console.log('loadMore')
      this.getHomeGoods1(this.currentType)
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
        // let fruitsObj = {...data}
        // this.goods[type].list.push(data)
        // console.log(typeof data, this.goods[type])
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
  mounted () {
    // 监听图片加载完成
    this.$bus.$on('itemImageLoad', () => {
      debounce(this.$refs.scroll.refresh())
    })
  }
}
</script>
<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
}
ul.list {
  margin-bottom: 55px;
}
.content {
  height: calc(100vh - 93px);
  overflow: hidden;
}
</style>
