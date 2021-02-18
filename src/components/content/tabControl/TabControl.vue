<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" :key="index"
    :class="{active:index===currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style>
.tab-control{
  display: flex;
  text-align: center;
  background-color: #ffffff;
  z-index: 9;
  overflow: hidden;
}
.tab-control-item{
  flex: 1;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
}
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom:3px solid var(--color-tint);

}
.tab-control-item span{
  padding: 5px;
}
</style>
