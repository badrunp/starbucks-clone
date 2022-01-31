import Link from 'next/link';
import { ReactNode } from 'react';
import Location from './icon/Location';

const NavbarFindLocation = ({ className = 'hidden md:flex' }: { className?: ReactNode }) => {
  return (
    <Link href={'/'}>
      <a className={`${className} items-center space-x-2 hover:text-green-600`}>
        <Location />
        <span className='block font-semibold tracking-tight'>Find a store</span>
      </a>
    </Link>
  );
};

export default NavbarFindLocation;
