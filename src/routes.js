import { IngredientPage } from './pages/IngredientPage'
import { HomePage } from './pages/HomePage'
import { PageNotFoundPage } from './pages/PageNotFoundPage'

const routes = [
    { path: '*', name: 'default', component: PageNotFoundPage },
    { path: '/', name: 'home', component: HomePage },
    { path: '/ingredients', name:'ingredients', component: IngredientPage }
];

export { routes };