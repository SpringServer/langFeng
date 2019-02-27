<template>
  <div>
    <search-header></search-header>
  </div>
</template>

<script type="text/ecmascript-6">
import SearchHeader from '@/pages/search/components/Header.vue'
export default {
  name: 'Search',
  data () {
    return {

    }
  },
  components: {
    SearchHeader
  }
}
</script>

<style scoped lang="scss">
@import '~styles/global.scss';
</style>
