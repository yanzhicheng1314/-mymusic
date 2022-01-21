<template>
  <div class="nav-bar">
   <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    
  }
</script>

<style>
   .nav-bar{
    display: flex;
    position: relative;
    left: 0;
    top: 0;
    right: 0;
    background-color: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.5);
  }
</style>