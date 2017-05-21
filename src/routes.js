import Home from 'components/Page/Home';
import About from 'components/Page/About';

export default [
  {
    label: 'Главная',
    path: '/',
    exact: true,
    component: Home
  },
  {
    label: 'О нас',
    path: '/about',
    component: About
  }
];
