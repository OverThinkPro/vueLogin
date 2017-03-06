<template lang="html">
  <div class="register">
    <h2>登录成功，可进行注册</h2>
    <form class="register-form">
      <div class="form-group">
        <label class="label-info">账号:</label>
        <input class="input-info" type="text" v-model="user.userName" />
      </div>
      <div class="form-group">
        <label class="label-info">密码:</label>
        <input class="input-info" type="password" v-model="user.password" />
      </div>
      <div class="form-group">
        <label class="label-info">确认密码:</label>
        <input class="input-info" type="password" v-model="password" />
        <label v-show="show" class="check">密码不一致!</label>
      </div>
      <div class="form-control">
        <button class="button" type="reset">重置</button>
        <button class="button" type="submit" @click="register">注册</button>
      </div>
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'register',
  data () {
    return {
      password: '',
      user: {
        userName: '',
        password: '',
      },
      show: false,
      regUrl: "http://192.168.2.128:8080/vueLogin"
    };
  },
  computed: {
    password () {
      if (this.password != this.user.password) {
        this.show = true;
      }
    }
  },
  methods: {
    register() {
      this.$http.post(this.regUrl, this.user).then((response) => {
        console.log("register: " + response);
      });
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.register
  position: relative;
  left: 30%;
  top: 10em;
  width: 40%;
  font-family: Arial;
  .register-form
    margin: 0 auto;
    width: 80%;
    font-size: 18px;
    .form-group
      padding-top: 10px;
      height: 60px;
      .label-info
        width: 45%;
        height: 60px;
        line-height: 60px;
        text-align: right;
        font-weight: bold;
      .input-info
        width: 55%;
        height: 35px;
        border-radius: 4px;
        font-size: 18px;
        outline: none;
      .check
        color: red;
    .form-control
      text-align: right;
      margin-right: 62px;
      .button
        width: 100px;
        height: 30px;
        border-radius: 5px;

</style>
