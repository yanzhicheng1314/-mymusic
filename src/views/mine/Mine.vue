<template>
  <div class="mine">
  <Nav>
     <div slot="left">
       <img class="left" src="../../assets/img/mine/我的.png" alt="">
     <span>网易云音乐</span>
      <input type="text"
       placeholder="过年当然要和好兄弟过" clearable v-model="int">
     </div>
     <div slot="center" class="center"
      @click="clicklogin">{{islogin}}</div>
  </Nav>
  </div>
</template>

<script>
import Nav from "../../components/common/Nav.vue"

 export default {
    name: 'Mine',
    components: {
      // musics,
    Nav,
   
    },
    data() {
      return {
         islogin:'未登录',
         int:''
       
      };
    },
    methods: {
      clicklogin(){
       this.$router.push('/login')
      }
    },
    mounted ()  {
      if(this.$store.state.o.ucode==200){    
       this.islogin=this.$store.state.o.uname
       }
    }
    
  }
</script>

<style scoped>

.left img{
 padding-left: 10px;
 padding-top: 3px;
}
.left span{
  position: absolute;
  top: 3px;
   padding-left: 10px;
}
.left input{
  position: absolute;
  font-size: 12px;
  color: rgb(22, 15, 15);
  top: 9px;
   left: 26%;
   height: 28px;
   width: 140px;
   text-align: center;
    border-radius: 60px;
    background-color: rgb(27, 25, 25) 0 0 repeat;
    opacity: 0.5;
 

}

</style>