import { ReactNode } from 'react';
import { TypeMenu } from './Navbar';
import NavbarAuthItem from './NavbarAuthItem';

const navbarAuthMenu: TypeMenu[] = [
  {
    id: 1,
    title: 'Sign in',
    url: '/',
  },
  {
    id: 2,
    title: 'Join now',
    url: '/',
  },
];

const NavbarAuth = ({ className = 'hidden md:flex' }: { className?: ReactNode }) => {
  return (
    <ul className={`${className} items-center space-x-4`}>
      {navbarAuthMenu.map(({ id, title, url }) => (
        <NavbarAuthItem key={id} id={id} title={title} url={url} />
      ))}
    </ul>
  );
};

export default NavbarAuth;
