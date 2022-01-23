<template>
  <div>
     <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(item,index) in banner" :key="index">
     <img class="lbt" :src="item.pic" alt="">
     <div class="item-title">{{item.typeTitle}}</div>
    </el-carousel-item>
  </el-carousel>
  </div>
</template>
/**
 * 每日推荐
 */
<script>
  export default {
    name: 'childhomebannerlist',
    props:{
      banner:{
        type:Array
      }
    }
    
  }
</script>

<style>
   .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  

.el-carousel__container{
   width: 900px;
   margin: 10px auto;
} 

  .lbt{
    width: 100%;
    height: 100%;
  }
</style>