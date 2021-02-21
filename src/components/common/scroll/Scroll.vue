<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    // 1.创建滚动对象
    setTimeout(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType
      })
    }, 200)
    // 2.监听滚动位置
    setTimeout(() => {
      this.scroll.on('scroll', (position) => {
        // console.log(position)
        this.$emit('scroll', position)
      })
    }, 300)
  },
  methods: {
    scrollTo (x, y, time = 300) {
      console.log('scrollto')
      this.scroll.scrollTo(x, y, time)
    }
  }
}
</script>

<style scoped>

</style>
