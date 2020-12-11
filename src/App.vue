<template>
  <div id="app">
  <Index/>
  
  </div>
</template>

<script>
import Index from '@/components/index'

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>
*{
  margin:0;
  padding: 0;
}
body , html{
  height: 100vh;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
