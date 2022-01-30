import { NextPage } from 'next';
import NavbarLeft from './NavbarLeft';

export interface NavbarMenu {
  id: number;
  title: string;
  url: string;
}

const Navbar: NextPage = () => {
  return (
    <div className='w-full h-[72px] md:h-[83px] lg:h-[101px] border-b shadow px-4 md:px-6 lg:px-[40px]'>
      <div className='flex items-center justify-between h-full w-full'>
        <NavbarLeft />
      </div>
    </div>
  );
};

export default Navbar;
