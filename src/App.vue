<template>
  <div id="app">
    <NavigationBar/>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import NavigationBar from './components/Navigation/NavigationBar.vue'
import routes from './routes.js'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

export default {
  name: 'app',
  components: {
    NavigationBar
  },
  router,
  template: "<App/>"
}
</script>

<style>
@import url("./App.css");
</style>
