import { debounce } from './utils'
import BackTop from '@/components/content/backTop/BackTop.vue'
export const itemListernerMixin = {
  data () {
    return {
      itemImgListener: null
    }
  },
  mounted () {
    this.itemImgListener = () => {
      // console.log(this.$refs.scroll.scroll.scrollerHeight)
      debounce(this.$refs.scroll.refresh())
    }
    this.$bus.$on('itemImageLoad', this.itemImgListener)
    // console.log('itemListernerMixin')
  }
}
export const backTopMixin = {
  data () {
    return {
      isShowBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick () {
      this.$refs.scroll.scrollTo(0, 0)
    }
  }
}
