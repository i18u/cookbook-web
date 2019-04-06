import IngredientPage from './pages/IngredientPage/IngredientPage.vue'
import HomePage from './pages/HomePage/HomePage.vue'

const routes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/ingredients', name:'ingredients', component: IngredientPage }
];

export default routes;