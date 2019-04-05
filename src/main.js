import Vue from 'vue'
import VueRouter from 'vue-router'
import IngredientPage from './pages/IngredientPage.vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: '/', component: { template: '<div>test</div>' } },
  { path: '/ingredients', component: IngredientPage }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
