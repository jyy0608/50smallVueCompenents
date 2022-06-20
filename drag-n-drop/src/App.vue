<template>
  <DragDrop></DragDrop>
</template>

<script>
  import DragDrop from './components/Drag-N-Drop'

export default {
  name: 'App',
  components: {
    DragDrop,
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
  margin: 0;
}

@media (max-width: 800px) {
    #app {
        flex-direction: column;
    }
}
</style>
