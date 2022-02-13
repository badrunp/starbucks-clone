import { ReactNode } from 'react';
import { navbarAuthMenu } from '../data/navbar';
import NavbarAuthItem from './NavbarAuthItem';

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
