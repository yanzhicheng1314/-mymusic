<template>
  <div class="mine">
    <musics/>
  <Nav>
     <div slot="left">
       <img class="left" src="../../assets/img/mine/我的.png" alt="">
     </div>
     <div slot="center" class="center"
      @click="clicklogin">立即登录></div>
  </Nav>
  </div>
</template>

<script>
import Nav from "../../components/common/Nav.vue"
import musics from "../musics.vue"
  export default {
    name: 'Mine',
    components: {
      musics,
    Nav
    },
    methods: {
      clicklogin(){
       this.$router.push('/login')
      }
    }
    
  }
</script>

<style scoped>
.mine{
  height: 896px;
    width: 414px;
    margin: 0 auto;
   
}
.left img{
 padding-left: 10px;
 padding-top: 3px;
}

</style>