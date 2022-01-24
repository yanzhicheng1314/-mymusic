<template>
  <div class="home"> 
    <homemusiclist/>
    <childhomebannerlist :banner='banner'/>
    <musiclistview :recommends='recommends'/>
    <homealbumnewest :albumslist="albumslist"/>
    <!-- <div class="player">
 <audio :src="musicUrl" controls autoplay></audio> 
 </div>  -->
  </div>
</template>

<script>
import homemusiclist from "./chiidhome/homemusiclist.vue"
import childhomebannerlist from "./chiidhome/childhomebannerlist.vue"
import musiclistview from "./chiidhome/musiclistview.vue"
import homealbumnewest from "./chiidhome/homealbumnewest.vue"

import {gethomepagebanner,
getrecommendresource,
getalbumnewest,
} from "../../network/home"
  export default {
    name: 'Home',
   components: {
     homemusiclist,
     childhomebannerlist,
     musiclistview,
     homealbumnewest
   },
   data() {
     return {
       banner: [],
       recommends:[],
       albumslist:[],  
      //  musicUrl: '',
     };
   },
   created () {
       gethomepagebanner().then((res)=>{ 
         this.banner=res.data.data.blocks[0].extInfo.banners
       })
   
  /**
   * 每日推荐歌单
   */
getrecommendresource().then((res)=>{
  //  console.log(res);
   this.recommends= res.data.playlists
})

/**
 * 最新专辑
 */
      getalbumnewest().then((res)=>{
        //console.log(res);
         this.albumslist=res.data.albums
      })
   
  //  139150
   }  
  }
</script>

<style scoped>
  .player audio{
    width: 126%;
    height: 40px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
   
  }
</style>