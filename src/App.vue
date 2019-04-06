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

import IngredientPage from './pages/IngredientPage/IngredientPage.vue'
import HomePage from './pages/HomePage/HomePage.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/ingredients', name:'ingredients', component: IngredientPage }
]

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
