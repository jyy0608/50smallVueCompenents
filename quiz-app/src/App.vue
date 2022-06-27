<template>
  <router-view></router-view>
</template>

<script>
  import QuizApp from './components/Quiz-App'

  export default {
    name: '',
    components: {
      QuizApp,
    }
  }
</script>

<style>
  #app {
    height: 100vh;
    display: flex;
    /* 垂直居中 */
    align-items: center;
    /* 水平居中 */
    justify-content: center;
  }
</style>