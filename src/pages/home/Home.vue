<template>
  <div>
      <home-header></home-header>
      <global-font></global-font>
      <!-- <scroll-bar ref="vsb" :scrollTrackStyle="scrollTrackStyle" :watchValue="watchValue" :scrollBarStyle="scrollBarStyle" style="height:667px;overflow: hidden;"> -->
        <!-- <div class="wrap"> -->
      <home-icon></home-icon>
      <home-common :abc="this.abc"></home-common>
      <!-- </div> -->
      <!-- </scroll-bar> -->
  </div>
</template>

<script type="text/ecmascript-6">
// import scrollBar from 'vue-scroll-bar'
import HomeHeader from '@/pages/home/components/Header'
import HomeIcon from '@/pages/home/components/Icon'
import HomeCommon from '@/pages/home/components/Common'
import GlobalFont from '@/common/components/Font'
export default {
  name: 'Home',
  data () {
    return {
      // scrollTrackStyle: {
      //   backgroundColor: 'white'
      // },
      // scrollBarStyle: {

      // },
      abc: [{
        aid: 123,
        title: 'asd'
      }, {
        aid: 223,
        title: 'asd'
      }, {
        aid: 223,
        title: 'asd'
      }, {
        aid: 223,
        title: 'asd'
      }, {
        aid: 223,
        title: 'asd'
      }, {
        aid: 223,
        title: 'asd'
      }]
    }
  },
  components: {
    HomeHeader,
    HomeIcon,
    HomeCommon,
    GlobalFont
  },
  methods: {

  },
  mounted () {
    // vue-scroll-bar 监听滚动
    // console.log(this.$refs.vsb)
    // window.document.body.addEventListener('scroll', () => { console.log(document.documentElement.scrollTop) }, true)
  },
  beforeMount () {
    // 判断缓存中是否有用户
    const data = JSON.parse(localStorage.getItem('User'))
    // console.log(data.userName)
    if (data) {

    } else {
      this.$router.replace('/login')
    }
  },
  watch: {

  }
}
</script>

<style scoped lang="scss">
@import '~styles/global.scss';
</style>
