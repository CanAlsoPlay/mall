<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, index) in topImages" :key="index">
      <img class="swiper-img" :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper/index'
export default {
  name: 'DetailSwiper',
  props: {
    topImages: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
.detail-swiper {
  width: 280px;
  overflow: hidden;
  margin: 0 auto;
}
.swiper-item {
  width: 100%;
}
.swiper-img {
  width: 280px;
  height: 420px;
}
</style>
