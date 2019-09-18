<template>
  <div id="app">
    <NavigationBar/>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';
import NavigationBar from './components/Navigation/NavigationBar';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default {
  name: 'app',
  components: {
    NavigationBar,
  },
  router,
  template: '<App/>',
};
</script>

<style>
body, html {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: #ffeeee;
}

button::-moz-focus-inner {
  border: 0;
}

.page-container {
  padding: 15px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

#app {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
