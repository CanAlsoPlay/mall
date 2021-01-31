<template>
  <TabBar>
    <TabBarItem path="/home">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/home.svg" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/home_active.svg" />
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/category">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/category.svg" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/category_active.svg" />
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/shopcart">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/shopcart.svg" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/shopcart_active.svg" />
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/profile" activeColor="blue">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/profile.svg" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/profile_active.svg" />
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'
import TabBar from '@/components/common/tabbar/TabBar.vue'
export default {
  name: 'MainTabBar',
  components: {
    TabBarItem,
    TabBar
  }
}
</script>
