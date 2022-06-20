<template>
  <div id="app">
    <HoverBoard></HoverBoard>
  </div>
</template>

<script>
  import HoverBoard from './components/HoverBoard'

  export default {
    name: 'App',
    components: {
      HoverBoard,
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
    overflow: hidden;
  }
</style>