<template>
  <div class="clooection-block">
     <h3 class="tilte" style="font-size:24px;">华语歌单</h3>
          <div class="items">
       <div class="item"   
       v-for="(item,index) in recommends" :key="index">  
              <div class="grid-content bg-purple"
              @click="items(item.id)">             
                 <img :src="item.coverImgUrl" alt="">
                  <p class="name">{{item.name}}</p>
                   </div>  
                  </div>
     </div>
     <!-- <el-row>
</el-row> -->
  </div>
</template>
/**
 * 华语歌单
 */
<script>

  export default {
    name: 'musiclistview', 
    props:{
    recommends:{
      type:Array,
     default() {
        return {}
      }
    }
    },
    methods: {
      items(id){
          this.$router.push({name:'detail',params:{id}})
      }
    }
    
  }
</script>

<style scoped>

 .item img{
   width: 150px;
 
 }

  .items{
      display: flex;
  }
  .item{
    flex: 1;
  }

</style>