<template>
  <swiper style="overflow: visible" class="detail-swiper">
    <swiper-item v-for="(item, index) in topImages" :key="index">
      <div class="img-item">
        <img class="swiper-img" :src="item" alt="">
      </div>
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
  width: 240px;
  margin: 0 auto;
}
.img-item {
  width: 260px;
  background-color: #fff;
  padding: 0 10px;
}
.swiper-img {
  width: 240px;
  height: 360px;
}
</style>
