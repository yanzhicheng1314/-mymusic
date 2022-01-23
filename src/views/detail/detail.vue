<template>
  <div class="detail">
     <detailitem :details='details'/>
     <detailsongs :songs='songs' @sid='suid'/>
       <div class="player">
 <audio :src="musicUrl" controls autoplay></audio> 
 </div>
  </div>
</template>

<script>
import detailitem from "./detailitem.vue"
import detailsongs from "./detailsongs.vue"

import {getplaylistdetail,
getplaylisttrack,
getcheckmusic
} from "../../network/detail"
 
 
 export default {
    name: 'detail',
    components: {
      detailitem,
      detailsongs
    },
    data() {
      return {
        songid: null,
        details:{},
        songs:[],
        musicUrl:'',
         userid:null

      };
    },
    methods: {
      suid(id){
        this.userid=id
      }
    },
    created () {
      /**
       * 获取歌单详情
       */
       this.songid=this.$route.params.id
       console.log(this.songid);
      getplaylistdetail({id:this.songid}).then((res)=>{
          this.details= res.data.playlist
      })
      /**
       * 获取歌单所有歌曲
       */
       getplaylisttrack({id:this.songid,limit:20,offset:1})
       .then((res)=>{
        this.songs=res.data.songs
       })
          if(this.userid==null){     
           
          }else{
  getcheckmusic({id:this.userid}).then((res)=>{
         console.log(res+'ssss');
          })
          }
     

    }
    
  }
</script>

<style>
  
</style>