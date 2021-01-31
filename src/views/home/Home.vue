<template>
  <div id="home">
    <NavBar class="home-nav"><template v-slot:center><div>购物街</div></template></NavBar>
    <HomeSwiper :banners="banners" />
    <RecommendView :recommends="recommends"/>
    <FeatureView/>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'

import HomeSwiper from './childComp/HomeSwiper'
import RecommendView from './childComp/RecommendView'
import FeatureView from './childComp/FeatureView'

import { getHomeMultidata } from '@/network/home'
export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data () {
    return {
      recommends: [],
      banners: []
    }
  },
  methods: {
    getHomeMultidata1 () {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  },
  created () {
    // 请求多个数据
    this.getHomeMultidata1()
    // 请求商品数据
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
</style>
