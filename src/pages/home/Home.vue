<template>
  <div>
      <home-header></home-header>
  </div>
</template>

<script type="text/ecmascript-6">
import HomeHeader from '@/pages/home/components/Header'
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    HomeHeader
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
</style>
