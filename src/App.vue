<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>
<script>
// @ is an alias to /src
import MainTabBar from '@/components/content/maintabbar/MainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>
<style scoped>
  @import "assets/css/base.css";
</style>
