<template>
    <Swiper :slides-per-view="4" navigation>
      <SwiperSlide v-for="p in featured" :key="p.id">
        <ProductCard :product="p" />
      </SwiperSlide>
    </Swiper>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  export default {
    props: ['featured'],
    components: { Swiper, SwiperSlide }
  }
  </script>
  