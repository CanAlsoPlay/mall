<template>
  <div v-if="paramsInfo.rule !== undefined && paramsInfo.rule !== null && Object.keys(paramsInfo.rule).length !== 0" class="params-info">
    <div v-for="(tr, index) in paramsInfo.rule.tables[0]" :key="index"
      class="info-size">
      <div class="info-item" v-for="(item, indey) in tr" :key="indey">
        <span>{{item}}</span>
      </div>
    </div>
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
.params-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.info-size {
  display: flex;
  height: 42px;
  font-size: 18px;
  /* padding-bottom: 5px; */
  margin-top: 15px;
  border-bottom: 1px solid  rgba(0, 0, 0, .1);
}
.info-item {
  flex: 1;
}
</style>
