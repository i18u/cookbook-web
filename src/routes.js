// Pages
import IngredientPage from '@/pages/IngredientPage';
import HomePage from '@/pages/HomePage';
import PageNotFoundPage from '@/pages/PageNotFoundPage';

// Sub views
import IngredientForm from '@/components/Layout/Ingredients/IngredientForm';

const routes = [
  {
    path: '*',
    name: 'default',
    component: PageNotFoundPage,
  },
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/ingredients',
    name: 'ingredients',
    component: IngredientPage,
    children: [
      {
        path: 'add',
        component: IngredientForm,
      },
    ],
  },
];


export default routes;
