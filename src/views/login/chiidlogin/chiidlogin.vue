<template>
  <div class="chiidlogin">
    <Nav>
      <div slot="left" @click="xclick" class="left">&lt;</div>
      <div slot="center">立即登录</div>
    </Nav>
    <div class="input-group margin-top">
      <input type="tel" v-model="phone" placeholder="输入手机号" />
    </div>
    <div class="input-group">
      <input type="password" v-model="pass" placeholder="密码" />
    </div>
    <div class="button-next" @click="loginclick">登录</div>
   <toast :message='message' :show='show'/>
  </div>
</template>

<script>
import Nav from "../../../components/common/Nav.vue";

import toast from "../../../components/common/toast/toast.vue"

import {getloginphone}from "../../../network/login"
export default {
  name: "chiidlogin",
  components: {
    Nav,
    toast
  },
  data() {
    return {
      phone: "",
      pass: "",
      message:'',
      show:false,
   ucodes:{
    ucode:0,
      uname:'',
      uid:0  
    }  
    };
  },
  methods: {
    xclick() {
      this.$router.go(-1);
    },
      loginclick(){
   getloginphone({phone:this.phone,password:this.pass}).then((res)=>{
      console.log(res);
      if(res.data.code>=200&&res.data.code<=300){
        this.ucodes.ucode=res.data.code
      this.ucodes.uname=res.data.profile.nickname
     this.ucodes.uid=res.data.account.id
     this.message='恭喜你登录成功啦'
     this.$store.commit('setid',this.ucodes)  
        setTimeout(()=>{
           this.show=true
         this.$router.push({name:'Home'})
        },2000) 
      }else{
         this.message='账号或密码错误，请重新登录'
         this.show=true
         setTimeout(()=>{
           this.show=false
         },2000)
      }
   })
  }
  },

};
</script>

<style scoped>
.chiidlogin {
  height: 896px;
  width: 414px;
  margin: 0 auto;
}
.input-group {
  width: 90%;
  height: 34px;
  line-height: 34px;
  border-bottom: 3px solid #bcbdbc;
  margin: 10px auto;
}
.input-group > input {
  outline: none;
  width: 100%;
  height: inherit;
  font-size: 18px;
}

.button-next {
  width: 80%;
  margin: 30px auto;
  height: 35px;
  line-height: 35px;
  font-size: 18px;
  background-color: red;
  border-radius: 60px;
  text-align: center;
}
</style>