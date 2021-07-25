<template>
  <div id="app">
    <Menubar />
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import Menubar from '@/components/Menubar.vue'

export default {
  name: 'App',
  components: {
    Menubar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  padding-left: 250px;
}
</style>
