<template>
  <div class="Icon">
    <swiper :options="swiperOption" class="slide-container">
        <!-- slides -->
        <swiper-slide class="slide-li">I'm Slide 1</swiper-slide>
        <swiper-slide class="slide-li">I'm Slide 2</swiper-slide>
        <swiper-slide class="slide-li">I'm Slide 3</swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'homeIcon',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
@import '~styles/global.scss';
.Icon{
  position: relative;
  top:px2rem(82);
  height: px2rem(200);
  .slide-container {
    height: px2rem(200);
  }
}
</style>
