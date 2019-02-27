<template>
  <div class="font-container">
    <div class="font-home"><span class="iconfont home">&#xe627;</span>首页</div>
    <div class="font-setting"><span class="iconfont set">&#xe61f;</span>订单</div>
    <div class="font-setting"><span class="iconfont set">&#xe67b;</span>设置</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'globalFont',
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
@import '~styles/global.scss';
.font-container{
  position:absolute;
  position: fixed;
  bottom:0;
  width: 100%;
  z-index: 50;
  background: white;
  height:px2rem(40);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: grey;
  box-shadow: 0 px2rem(-3) px2rem(5) rgba(0, 0, 0, 0.4);
  .font-home{
    display: flex;
    flex:1;
    justify-content: center;
    align-items: center;
    font-size: px2rem(14);
    .home {
      padding-right: px2rem(5);
      font-size: px2rem(18);
    }
  }
  .font-setting{
    display: flex;
    flex:1;
    justify-content: center;
    align-items: center;
    font-size: px2rem(14);
    .set{
      padding-right: px2rem(5);
      font-size: px2rem(18);
    }
  }
}
</style>
