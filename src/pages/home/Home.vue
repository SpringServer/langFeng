<template>
  <div>
      <home-header></home-header>
      <div>
        <home-icon></home-icon>
        <home-common></home-common>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import HomeHeader from '@/pages/home/components/Header'
import HomeIcon from '@/pages/home/components/Icon'
import HomeCommon from '@/pages/home/components/Common'
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    HomeHeader,
    HomeIcon,
    HomeCommon
  },
  beforeMount () {
    // 判断缓存中是否有用户
    const data = JSON.parse(localStorage.getItem('User'))
    // console.log(data.userName)
    if (data) {

    } else {
      this.$router.replace('/login')
    }
  }
}
</script>

<style scoped lang="scss">
@import '~styles/global.scss';
</style>
