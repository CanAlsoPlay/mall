<template>
  <div v-if="Object.keys(paramsInfo).length !== 0" class="shop-info">
  </div>
</template>

<script>
export default {
  name: 'DetailParamsInfo',
  props: {
    paramsInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
</style>
