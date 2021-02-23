<template>
  <div>
    <detail-nav-bar/>
  </div>
</template>

<script>
import DetailNavBar from './childCom/DetailNavBar'
export default {
  name: 'Detail',
  data () {
    return {
      id: null
    }
  },
  components: {
    DetailNavBar
  },
  created () {
    this.id = this.$route.params.id
  }
}
</script>

<style scoped>

</style>
