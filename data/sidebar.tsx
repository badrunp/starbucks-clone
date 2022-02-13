import { TypeMenu } from '../components/Navbar';

const sidebarMenu: TypeMenu[] = [
  {
    id: 1,
    title: 'Menu',
    url: '',
    dataChild: [
      {
        id: 1,
        title: 'All Products',
        url: '/',
      },
      {
        id: 2,
        title: 'Featured',
        url: '/',
      },
      {
        id: 3,
        title: 'Previous Orders',
        url: '/',
      },
      {
        id: 4,
        title: 'Favorite Products',
        url: '/',
      },
    ],
  },
  {
    id: 2,
    title: 'Rewards',
    url: '/',
  },
  {
    id: 3,
    title: 'Gift Cards',
    url: '/',
  },
];

export { sidebarMenu };
