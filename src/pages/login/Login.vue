<template>
  <div class="container">
      <form class="login-from">
        <div class="logo-container">
          <div class="logo">
          </div>
        </div>
        <div class="input-container">
          <input class="userName" type="text" name="userName" placeholder="请输入用户名">
        </div>
        <div class="input-container">
          <input class="passWord" type="password" name="passWord" placeholder="请输入密码">
        </div>
        <div class="input-container">
          <button class="button">登陆</button>
        </div>
        <div class="p-container">
          <p>忘记密码?</p>
          <p>新用户注册</p>
        </div>
      </form>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'login',
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
  .container{
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background-image: url('~@/assets/static/images/login/jls.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .login-from {
      width: 80%;
      height:px2rem(300);
      .logo-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        height:px2rem(60);
        padding: px2rem(20) px2rem(0) px2rem(30) px2rem(0);
        .logo{
          width:px2rem(60);
          height:px2rem(60);
          background-image: url('~@/assets/static/images/login/logo.png');
          background-repeat:no-repeat;
          background-size: 100% 100%;
          border-radius: 50%;
        }
      }
      .input-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        height:px2rem(35);
        padding: px2rem(5) px2rem(0) px2rem(5) px2rem(0);
        border:0;
        .userName{
          border:0;
          width:100%;
          height:100%;
          text-indent: px2rem(5);
        }
        .passWord{
          border: 0;
          width:100%;
          height:100%;
          text-indent: px2rem(5);
        }
        .button{
          border:0;
          width:100%;
          height:100%;
          background:#43CD80;
          color:white;
        }
      }
      .p-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: px2rem(5) px2rem(0) px2rem(0) px2rem(0);
        color: rgba(30, 144, 255,1);
      }
    }
  }
  input{
    outline: none;
  }
  input:focus { outline: none; }
</style>
