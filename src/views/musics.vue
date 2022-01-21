<template>
  <div class="musics">
       <navbar>
          <navbaritem path="/home">
       <div slot="item-text">首页</div>
      </navbaritem>
 
      <navbaritem path="/topic">
    <div slot="item-text">榜单</div>
      </navbaritem>

      <navbaritem path="/Mine">
<div slot="item-text">我的</div>
      </navbaritem>

      <navbaritem path="/search">
        <div slot="item-text">搜索</div>
     
      </navbaritem>
  
    </navbar>
  
  </div>
</template>

<script>
import navbar from "./../components/common/navbar.vue"
import navbaritem from "./../components/common/navbaritem.vue"
  export default {
    name: 'musics',
    components: {
      navbar,
      navbaritem
    }
    
  }
</script>

<style>
</style>