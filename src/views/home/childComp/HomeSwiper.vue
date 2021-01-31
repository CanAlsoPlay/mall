<template>
  <Swiper>
      <SwiperItem v-for="item in banners" :key="item.link">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </SwiperItem>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper/index'
export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
