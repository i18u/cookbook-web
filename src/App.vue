<template>
  <div id="app">
    <NavigationBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from './components/Navigation/NavigationBar.vue'

export default {
  name: 'app',
  components: {
    NavigationBar
  }
}
</script>

<style>
@import url("./App.css");
</style>
