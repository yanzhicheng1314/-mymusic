<template>
  <div class="musics">
       <!-- <navbar>
          <navbaritem path="/home">
       <div slot="item-text">发现音乐</div>
      </navbaritem>
 
      <navbaritem path="/topic">
    <div slot="item-text">播客</div>
      </navbaritem>

      <navbaritem path="/Mine">
<div slot="item-text">视频</div>
      </navbaritem>

      <navbaritem path="/search">
        <div slot="item-text">关注</div> 
      </navbaritem>
    </navbar> -->

  </div>
</template>

<script>
import navbar from "./../components/common/navbar.vue"
import navbaritem from "./../components/common/navbaritem.vue"
  export default {
    name: 'musics',
    components: {
      // navbar,
      // navbaritem
    },
      methods: {
    itemClick() {
        this.$router.replace(this.path);
      console.log(11);
     
    },
  },
    
  }
</script>

<style>
</style>