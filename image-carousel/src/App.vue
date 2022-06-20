<template>
  <div id="app">
    <ImageCarousel></ImageCarousel>
  </div>
</template>

<script>
  import ImageCarousel from '@/components/ImageCarousel'

  export default {
    name: 'App',
    components: {
      ImageCarousel,
    }
  }
</script>

<style>
  #app {
    display: flex;
    /* 垂直居中 */
    align-items: center;
    /* 水平居中 */
    justify-content: center;
    height: 100vh;
    margin: 0;
  }
</style>