<template>
  <div>
    <div class="container">
      <div class="login-from">
        <div class="logo-container">
          <div class="logo">
          </div>
        </div>
        <div class="input-container">
          <input v-model="userName" class="userName" type="text" name="userName" placeholder="请输入用户名">
        </div>
        <div class="input-container">
          <input v-model="passWord" class="passWord" type="password" name="passWord" placeholder="请输入密码">
        </div>
        <div class="input-container">
          <button class="button" v-on:click="loginBtn()">登陆</button>
        </div>
        <!-- <div v-if="showError" class="error-container">
          <p>账号密码不正确</p>
        </div> -->
        <div class="p-container">
          <p>忘记密码?</p>
          <p>新用户注册</p>
        </div>
      </div>
      <div v-if="showError" class="error">
        <div class="close-error"><p v-on:click="closeTab">x</p></div>
        <p class="error-info">账号密码不匹配</p>
        <div class="close-btncontainer" v-on:click="closeTab"><button class="close-btn">确定</button></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'login',
  data () {
    return {
      userName: '',
      passWord: '',
      showError: false
    }
  },
  components: {

  },
  methods: {
    loginBtn () {
      const User = { userName: this.userName, passWord: this.passWord }
      const userName = this.userName
      const passWord = this.passWord
      if (userName === 'mly' && passWord === 'mly') {
        localStorage.setItem('User', JSON.stringify(User))
        this.$router.replace('/')
      } else {
        this.showError = true
      }
    },
    closeTab () {
      this.showError = false
    }
  }
}
</script>

<style scoped lang="scss">
@import '~styles/global.scss';
  .error{
    position: absolute;
    width:80%;
    height:px2rem(150);
    background: white;
    z-index:50;
    display: flex;
    flex-direction: column;
    border: px2rem(1) solid #444;
    border-radius: px2rem(15);
    .close-error{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      font-size: px2rem(25);
      margin-right:px2rem(5);
    }
    .error-info{
      display: flex;
      flex-direction: row;
      justify-content: center;
      color: red;
      padding: px2rem(25) px2rem(0) px2rem(25) px2rem(0);
    }
    .close-btncontainer{
      display: flex;
      flex-direction: row;
      justify-content: center;
      .close-btn{
        width:px2rem(120);
        height:px2rem(40);
        background: black;
        color:white;
        border: 0;
      }
    }
  }
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
          text-indent: px2rem(25);
        }
        .passWord{
          border: 0;
          width:100%;
          height:100%;
          text-indent: px2rem(25);
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
