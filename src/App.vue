<template>
  <div id="app">
    <router-view/>
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
