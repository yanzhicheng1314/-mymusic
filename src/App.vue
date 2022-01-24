<template>
  <div id="app">
    <Mine/>
    <el-container style="height: 100vh; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">  
        <el-menu-item-group>
         <el-menu-item index="1-1">
         <router-link to="/home">发现音乐</router-link> 
         </el-menu-item>
           <el-menu-item index="1-2">
         <router-link to="/topic">我的音乐</router-link> 
         </el-menu-item>
           <el-menu-item index="1-2">
         <router-link to="/search">搜索</router-link> 
         </el-menu-item>
          <el-menu-item index="1-2">
         <router-link to="/play">歌单</router-link> 
         </el-menu-item>
        </el-menu-item-group>          
    </el-menu>
  </el-aside>
   <router-view/>
</el-container>

<navbar class="navbar-item"/>

  </div>
</template>

<script>
import Mine from "./views/mine/Mine.vue"
import navbar from  "./components/common/navbar.vue"
export default {
  name:'App',
  components: {
       Mine,
       navbar
  },
 

    
}
</script>
<style lang="less" scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
 
</style>
