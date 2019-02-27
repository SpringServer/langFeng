<template>
  <div>
    <div class="title-container">
        <p>——</p>
        <p class="title">常用产品</p>
        <p>——</p>
    </div>
    <div class="filter-container">
        <div class="order border"><span class="iconfont o">&#xe66d;</span>排序</div>
        <div class="screen border"><span class="iconfont s">&#xe630;</span>筛选</div>
    </div>
    <ul>
        <li class="common-use border-bottom" v-for="(item,index) of this.abc" :key="index">
            <img class="common-image" src="@/assets/static/images/login/logo.png"/>
            <div class="common-content">
                <p class="common-title">产品名{{item.title}}</p>
                <p class="common-description">产品描述</p>
                <p class="common-price">单价</p>
            </div>
        </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'homeCommon',
  props: {
    abc: Array
  },
  methods: {
  },
  data () {
    return {

    }
  },
  components: {

  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
@import '~styles/global.scss';
.title-container{
    padding: px2rem(5) px2rem(0) px2rem(5) px2rem(0);
    height: px2rem(40);
    line-height: px2rem(40);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: px2rem(15);
    color:#444;
    p{
        padding: px2rem(0) px2rem(5) px2rem(0) px2rem(5);
    }
    .title{
        font-size: px2rem(20);
        color:black;
    }
}
.filter-container{
    height: px2rem(30);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .order{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
        text-align: center;
        font-size: px2rem(16);
        .o{
            padding-right:px2rem(5);
            font-size: px2rem(14);
        }
    }
    .screen{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
        text-align: center;
        font-size: px2rem(16);
        .s{
            padding-right:px2rem(5);
            font-size: px2rem(14);
        }
    }
}
.common-use{
    display: flex;
    flex-direction: row;
    padding: px2rem(5) px2rem(0) px2rem(5) px2rem(0);
    height:px2rem(120);
    .common-image{
        width:px2rem(90);
        height:px2rem(90);
        padding: px2rem(0) px2rem(10) px2rem(0) px2rem(10);
    }
    .common-content{
        flex:1;
        overflow: hidden;
        padding: px2rem(0) px2rem(5) px2rem(0) px2rem(5);
        .common-title{
            padding: px2rem(0) px2rem(0) px2rem(10) px2rem(0);
            font-size: px2rem(18);
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .common-description{
            padding: px2rem(0) px2rem(0) px2rem(10) px2rem(0);
            font-size: px2rem(14);
            color:#666;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .common-price{
            padding: px2rem(0) px2rem(0) px2rem(5) px2rem(0);
            font-size: px2rem(15);
            color:red;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        p{
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
}
</style>
