<template>
  <div class="homealbumnewest">
    <h3 class="tilte" style="font-size: 24px">最新专辑</h3>
    <div class="items">
    <div class="item" v-for="(item, index) in albumslist" :key="index">
      
        <div class="grid-content bg-purple">
          <img :src="item.picUrl" :alt="item.name" />
          <p class="name">
            {{ item.company }}
            {{ item.alias[0] }}
            <span>{{ item.artist.name }}</span>
          </p>
          <div class="bofangclick" @click="songClick(item.copyrightId)">
           <div class="item-imag"> <img src="../../../assets/img/home/播放.png" alt=""/></div>
          </div>
        </div>
        
    </div>
    </div>
  </div>
</template>

<script>
import { getsongurl } from "../../../network/home";
export default {
  name: "homealbumnewest",
  props: {
    albumslist: {
      type: Array,
      default() {
        return {};
      },
    },
  },
  methods: {
    songClick(id) {
    
      getsongurl({ id: id }).then((res) => {
        let url = res.data.data[0].url;
        this.$store.commit('songurl',url)
       
      });
    },
  },
};
</script>

<style scoped>
.homealbumnewest {
  position: relative;
}
.grid-content img {
  width: 40px;
  height: 40px;
}
.bofangclick img {
  width: 20px;
  height: 20px;
}
.items{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  position: relative;
}
.item{
  width: 250px;
  height: 150px;
}
.bofangclick{
  position: relative;
  width: 50px;
}
.item-imag{
  position: absolute;
  top: -50px;
  left: 10px;
}
</style>