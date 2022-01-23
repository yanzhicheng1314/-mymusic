<template>
  <div class="homealbumnewest">
    <h3 class="tilte" style="font-size: 24px">推荐歌单</h3>
    <!-- <div class="items"> -->
    <div class="item" v-for="(item, index) in albumslist" :key="index">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <img :src="item.picUrl" :alt="item.name" />
          <p class="name">
            {{ item.company }}
            {{ item.alias[0] }}
            <span>{{ item.artist.name }}</span>
          </p>
          <div class="bofangclick" @click="songClick(item.copyrightId)">
            <img src="../../../assets/img/home/播放.png" alt="" />
          </div>
        </div>
      </el-col>
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
      
        this.$parent.musicUrl = url;
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
  width: 16px;
  height: 16px;
}
</style>