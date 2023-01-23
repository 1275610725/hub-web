
<template>
  <div class="login">
    <h2>登陆注册</h2>
    <div class="login_form">
      <span>账号：</span>
      <input type="text" name="account" v-model="account" placeholder="请输入账号">
      <br>
      <span>密码：</span>
      <input type="password" name="password" v-model="password" @keyup.enter="login()" placeholder="请输入密码">
    </div>
    <button class="login_btn" @click="login()">登 录</button>
  </div>
</template>

<script>
import { postAction } from '@/api/manage'
export default {
  name: "Login",
  methods: {

    login() {
      var vm = this

      var data = {
        username: this.account,
        password: this.password
      }
      postAction('/api/login', data).then(function (res) {
        if (res.status == 200) {
          if (res.data.code != '00000') {
            vm.$toast(res.data.msg, "fail")
          } else {           
            localStorage.setItem('token', res.data.data.token)
            vm.$toast('登录成功', "success")
            vm.$router.push({ name: "hub" })
          }
        } else {
          vm.$toast("操作失败!")
        }
      })
    }
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(#a18cd1 0%, #fbc2eb 100%);
  background-size: cover;
  flex: 1;
  align-items: center;
}

.login {
  text-align: center;
  margin: 0 auto;
  width: 600px;
  height: 520px;
  background-color: rgba(87, 86, 86, 0.2);
  border-radius: 25px;
  box-shadow: 5px 2px 35px -7px #ff9a9e;
}

.login h2 {
  padding: 20px;
  margin-top: 40px;
  color: rgb(255, 248, 240);
  font-weight: 100;
}


.login_form {
  padding: 20px;
}

.login_form span {
  color: rgb(131, 220, 255);
  font-size: 18px;
  font-weight: 100;
}

.login_form input {
  background-color: transparent;
  width: 320px;
  padding: 2px;
  text-indent: 2px;
  color: white;
  font-size: 20px;
  height: 45px;
  margin: 30px 30px 30px 5px;
  outline: none;
  border: 0;
  border-bottom: 1px solid rgb(131, 220, 255);
}

input::placeholder {
  color: #fbc2eb;
  font-weight: 100;
  font-size: 18px;
  font-style: italic;
}

.login_btn {
  background-color: rgba(255, 255, 255, 0.582);
  border: 1px solid rgb(190, 225, 255);
  padding: 10px;
  width: 240px;
  height: 60px;
  border-radius: 30px;
  font-size: 30px;
  color: rgb(100, 183, 255);
  font-weight: 100;
  margin-top: 15px;
}

.login_btn:hover {
  box-shadow: 2px 2px 15px 2px rgb(190, 225, 255);
  background-color: transparent;
  color: white;
  /* 选择动画 */
  animation: login_mation 0.5s;
}

/* 定义动画 */
@keyframes login_mation {
  from {
    background-color: rgba(255, 255, 255, 0.582);
    box-shadow: 0px 0px 15px 2px rgb(190, 225, 255);
  }

  to {
    background-color: transparent;
    color: white;
    box-shadow: 2px 2px 15px 2px rgb(190, 225, 255);
  }
}
</style>