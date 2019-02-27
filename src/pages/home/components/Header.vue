<template>
  <div>
    <div class="header">
      <div class="header-container">
        <transition name="head">
          <div class="Manufactor" v-if="showHeader" :opacityStyle="opacityStyle">
            <p><span class="iconfont user-icon">&#xe607;</span>郎峰</p>
          </div>
        </transition>
        <div class="search-container">
          <span class="iconfont search-icon">&#xe613;</span>
          <input type="text" class="header-search" placeholder="搜索您的产品">
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'HomeHeader',
  data () {
    return {
      showHeader: true,
      opacityStyle: {
        opacity: 1
      }
    }
  },
  components: {

  },
  methods: {
    handleScroll () {
      // console.log(document.documentElement.clientTop)
      const top = document.documentElement.scrollTop
      if (top && top > 100) {
        this.showHeader = false
      } else {
        this.showHeader = true
      }
    }
  },
  activated () {
    // 绑定Scroll事件,一旦执行,methods方法会触发
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="scss">
@import '~styles/global.scss';
.header{
  position: absolute;
  z-index: 98;
  top: 0;
  .header-container{
    position: fixed;
    z-index: 99;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #0af;
    .Manufactor{
      margin: px2rem(10) px2rem(10) px2rem(10) px2rem(10);
    }
    .Manufactor p{
      margin-left:px2rem(3);
      font-size: px2rem(22);
      color :white;
      .user-icon{
        padding-right: px2rem(10);
        color :black;
      }
    }
    .search-container{
      position: relative;
      height: px2rem(30);
      margin: px2rem(5) px2rem(10) px2rem(5) px2rem(10);
      display: flex;
      flex-direction: row;
      justify-content: center;
      .search-icon{
        font-size: px2rem(18);
        line-height: px2rem(25);
        position: absolute;
        top:px2rem(3);
        left:px2rem(6);
      }
      .header-search{
        width: 100%;
        height: px2rem(25);
        line-height: px2rem(25);
        padding: px2rem(2.5) px2rem(0) px2rem(2.5) px2rem(0);
        outline: none;
        border: 0;
        border-radius: px2rem(3);
        text-align: center;
      }
    }
  }
}
.head-enter{
  transform: translate3d(0,-100%,0);
  opacity: 0;
}
.head-enter-to{
  transform: translate3d(0,0,0);
  opacity: 1;
}
.head-leave{
  transform: translate3d(0,0,0);
  opacity: 1;
}
.head-leave-to{
  transform: translate3d(0,-100%,0);
  opacity: 0;
}
.head-enter-active,.head-leave-active{
  transition: all .5s linear;
}
</style>
