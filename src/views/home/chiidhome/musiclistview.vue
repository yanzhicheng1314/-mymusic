<template>
  <div class="clooection-block">
    <div class="block-padding">
      <div class="title">
        <h3>新歌榜</h3>
        <a href="#">更多</a>
      </div>
      <div class="list clearfix">
        <div class="item">
          <div class="img-warpper">
            <img src="" alt="">
          </div>
          <div class="main">少年(童声版)</div>
          <div class="gary">水观音</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'musiclistview',
    
  }
</script>

<style scoped>
  .clooection-block{
    background-color: #f8f8f8;
    padding: 5px 0;
  }
  .block-padding{
    display: flex;
    margin: 14px 0 18px;
  }
   .title h3 {
    flex: 1 1 0%;
    display: block;
    font-weight: 700;
    font-size: 20px;
  }
  /* .list{
    width: 100%;
  } */
  /* .list .item{
    float: left;
    width: 31.33%;
    padding: 0 10px;
    margin-bottom: 10%;
  } */
</style>