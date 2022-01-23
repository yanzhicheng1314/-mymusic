<template>
  <div class="detailsongs">
    <div class="title">
      <div class="item-list"></div>
      <span>操作</span>
       <span>标题</span>
        <span>歌手</span>
         <span>专辑</span>
    </div>
  <div class="item-tltie" v-for="(item,index) in 
  songs" :key="index">
    <div class="item-lieb" @click="songclick(item.id)">
      <span>{{index+1}}</span>
       <span class="item-name">{{item.name}}</span>
    <span class="item-name">{{item.ar[0].name}}</span>
    <span class="item-name">{{item.al.name}}</span>
    </div>
  </div>
  </div>
</template>

<script>
import {getsongurl} from '../../network/home'
  export default {
    name: 'detailsongs',
    props:{
      songs:{
        type:Array,
        default(){
          return{}
        }
      },
      data() {
        return{
        
        }
      }
    },
         methods: {      
      songclick(id){
         this.$emit('sid',id)
         console.log(id);
      getsongurl({ id: id }).then((res) => {        
         let url = res.data.data[0].url;
         this.$parent.musicUrl = url;
      });
      }
    }
    
  }
</script>

<style scoped>

.item-list{
   float: right;
}

  .item-tltie{
    display: flex;

    justify-content:center;
  }
  .item-lieb{
    height: 40px;
    background-color: #F9F9F9;
    color: #363636;
    line-height: 40px;
     flex: 1;
  }
 
</style>