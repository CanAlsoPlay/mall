<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
 .tabbar{
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -2px 2px rgba(0, 0, 0, .1);
  }
</style>
