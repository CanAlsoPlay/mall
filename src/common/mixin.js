import { debounce } from './utils'
export const itemListernerMixin = {
  data () {
    return {
      itemImgListener: null
    }
  },
  mounted () {
    this.itemImgListener = () => {
      console.log(this.$refs.scroll.scroll.scrollerHeight)
      debounce(this.$refs.scroll.refresh())
    }
    this.$bus.$on('itemImageLoad', this.itemImgListener)
    console.log('itemListernerMixin')
  }
}
