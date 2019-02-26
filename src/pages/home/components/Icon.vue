<template>
  <div class="Icon">
    <swiper :options="swiperOption" class="slide-container">
        <!-- slides -->
        <swiper-slide>
          <div class="container-icons">
            <div class="icon border">
              <div class="icon-img">
                <img class="icon-img-content" src="@/assets/static/images/login/logo.png"/>
              </div>
              <div class="icon-description">
                <p>产品分类</p>
              </div>
            </div>
            <div class="icon border">
              <div class="icon-img">
                <img class="icon-img-content" src="@/assets/static/images/login/logo.png"/>
              </div>
              <div class="icon-description">
                <p>产品管理</p>
              </div>
            </div>
            <div class="icon border">
              <div class="icon-img">
                <img class="icon-img-content" src="@/assets/static/images/login/logo.png"/>
              </div>
              <div class="icon-description">
                <p>敬请期待</p>
              </div>
            </div>
            <div class="icon border">
              <div class="icon-img">
                <img class="icon-img-content" src="@/assets/static/images/login/logo.png"/>
              </div>
              <div class="icon-description">
                <p>敬请期待</p>
              </div>
            </div>
            <div class="icon border">
              <div class="icon-img">
                <img class="icon-img-content" src="@/assets/static/images/login/logo.png"/>
              </div>
              <div class="icon-description">
                <p>敬请期待</p>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="container-icons">
            <div class="icon border">
              <div class="icon-img">
                <img class="icon-img-content" src="@/assets/static/images/login/logo.png"/>
              </div>
              <div class="icon-description">
                <p>全部</p>
              </div>
            </div>
          </div>
        </swiper-slide>
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
          el: '.swiper-pagination'
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
  margin-top:px2rem(82);
  .slide-container {
    .container-icons{
        overflow: hidden;
        height: 0;
        padding-bottom: 50%;
        background: white;
        .icon{
          position: relative;
          overflow: hidden;
          float: left;
          width:25%;
          height: 0;
          padding-bottom: 25%;
          .icon-img{
            position: absolute;
            left: 0;
            top: 0;
            left:0;
            bottom: px2rem(5);
            box-sizing: border-box;
            padding: px2rem(18) px2rem(18) px2rem(13) px2rem(18);
            .icon-img-content{
              display: block;
              width: 100%;
              height: 100%;
              margin:0 auto;
              border-radius: 50%;
            }
          }
          .icon-description{
            position: absolute;
            left: 0;
            left:0;
            bottom: 0;
            text-align: center;
            width:100%;
            p {
              font-size:px2rem(15);
            }
          }
        }
    }
  }
}
</style>
