<template>
  <BoxesBackground></BoxesBackground>
</template>

<script>
  import BoxesBackground from './components/3D-Boxes-Background'

  export default {
    name: 'App',
    components: {
      BoxesBackground,
    }
  }
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    /* 垂直居中 */
    align-items: center;
    /* 水平居中 */
    justify-content: center;
  }
</style>