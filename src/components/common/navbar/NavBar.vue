<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.navbar {
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
}
.left,.right{
  width: 60px;
  /* background-color: rebeccapurple; */
}
.center{
  flex:1;
  /* background-color: blueviolet; */
  text-align: center;
}
</style>
