<template>
  <div class="search">
    <div class="search-container">
        <div class="search-back"><span class="iconfont search-icon">&#xe611;</span></div>
        <input type="text" class="header-search" placeholder="搜索您的产品">
    </div>
    <div class="search-wraaper">
        <div class="wraaper_search" >
            <div class="recommon-search">
                <span>热门搜索</span>
                <ul class="recommon-wraaper">
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'searchHeader',
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
.search{
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background: #eee;
    .search-container{
        display: flex;
        height: px2rem(30);
        background: #0af;
        flex-direction: row;
        justify-content: space-between;
        .search-back{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: px2rem(40);
            padding: px2rem(0) px2rem(10) px2rem(0) px2rem(0);
            span {
                line-height: px2rem(30);
                font-size: px2rem(25);
                color:rgb(10, 10, 10);
            }
        }
        .header-search{
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin:px2rem(2.5) px2rem(10) px2rem(2.5) px2rem(0);
            padding: px2rem(0) px2rem(0) px2rem(0) px2rem(0);
            height: px2rem(25);
            outline: none;
            border: 0;
            border-radius: px2rem(3);
            text-indent: px2rem(15)
        }
    }
    .search-wraaper{
        position: absolute;
        top: px2rem(30);
        left: 0;
        right: 0;
        bottom: 0;
        .wraaper_search{
            background: white;
            .recommon-search{
                padding:px2rem(10) px2rem(5) px2rem(10) px2rem(5);
                .recommon-wraaper{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    li{
                        display: flex;
                        flex-direction: row;
                        justify-content: space-around;
                        flex: 1;
                    }
                }
            }
        }
    }
}

</style>
