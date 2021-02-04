<template>
  <div id="home">
    <NavBar class="home-nav"><template v-slot:center><div>购物街</div></template></NavBar>
    <HomeSwiper :banners="banners" />
    <RecommendView :recommends="recommends"/>
    <FeatureView/>
    <TabControl class="tab-control"
        @tabClick="tabClick" :titles="['综合', '销量', '新品']" />
    <goods-list :goods="goods[currentType].list[0]"/>
    <ul class="list">
      <li>3333333333333</li>
      <li>3333333333333</li>
      <li>3333333333333</li>
      <li>3333333333333</li>
      <li>3333333333333</li>
      <li>3333333333333</li>
      <li>3333333333333</li>
      <li>3333333333333</li>
      <li>3333333333333</li>
      <li>3333333333333</li>
      <li>3333333333333</li>
      <li>3333333333333</li>
      <li>3333333333333</li>
    </ul>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '@/components/content/tabControl/TabControl.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'

import HomeSwiper from './childComp/HomeSwiper'
import RecommendView from './childComp/RecommendView'
import FeatureView from './childComp/FeatureView'

import { getHomeMultidata, getHomeGoods } from '@/network/home'
export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList
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
      currentType: 'pop'
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
    getHomeMultidata1 () {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods1 (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
        const data = res.list[0].result.wall.docs
        // console.log(typeof data, data)
        this.goods[type].list.push(data)
        this.goods[type].page += 1
      })
    }
  },
  created () {
    // 请求多个数据
    this.getHomeMultidata1()
    // 请求商品数据
    this.getHomeGoods1('pop')
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
</style>
