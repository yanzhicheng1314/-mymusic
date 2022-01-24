<template>
  <div class="mine">
  <div class="item-top">
   <span class="item-tltie">网易云音乐</span>
   <span class="item-rigch"><span class="left">&lt;</span>
        <span class="rigch">&gt;</span> 
      <span class="item-input">
        <input type="text"
       placeholder="请输入内容" clearable v-model="int">
 
       </span>
       </span>
       <span class="title" > 
         <span> <img src="../../assets/img/mine/我的.png" alt=""></span>
      <span class="name" @click="clicklogin">{{$store.state.currentUser}}</span>
       
       </span>
  </div>
  </div>
</template>

<script>

 export default {
    name: 'Mine',
    components: {
  

   
    },
    data() {
      return {
         isshow:'未登录',
         int:''
       
      };
    },
    methods: {
      clicklogin(){
       this.$router.push('/login')
      }
    },

    
  }
</script>

<style scoped>

.item-top{
  display: flex;
  justify-content: space-between;
  background-color:#EC4141 ;
  position: relative;
  height: 60px;
  line-height: 60px;
}
.item-tltie{
  font-size: 24px;
  color: #fff;
  margin-left: 20px;
}
.title img{
  width: 40px;
  height: 40px;
}
.item-rigch{
  width: 380px;
}
.left ,.rigch{
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 1px solid ;
   line-height: 24px;
   /* margin-top: 10px; */
   text-align: center;
   color: #FFFFFF;
 border-radius: 50px;
    background-color: rgb(27, 25, 25) 0 0 repeat;
    opacity: 0.5;
    font-size:18px;
    margin: 0 10px;
  
}
.item-input input{
  font-size: 12px;
  color: rgb(22, 15, 15);
   height: 30px;
   width: 180px;
   text-align: center;
    border-radius: 60px;
    background-color: rgb(27, 25, 25) 0 0 repeat;
    opacity: 0.5;
    
}


</style>