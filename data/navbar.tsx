import { TypeMenu } from '../components/Navbar';

const navbarAuthMenu: TypeMenu[] = [
  {
    id: 1,
    title: 'Sign in',
    url: '/signin',
  },
  {
    id: 2,
    title: 'Join now',
    url: '/signup',
  },
];

const navbarMenu: TypeMenu[] = [
  {
    id: 1,
    title: 'menu',
    url: '/',
  },
  {
    id: 2,
    title: 'rewards',
    url: '/',
  },
  {
    id: 3,
    title: 'gift cards',
    url: '/',
  },
];

export { navbarAuthMenu, navbarMenu };
