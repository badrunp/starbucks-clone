import { NextPage } from 'next';
import Link from 'next/link';
import Location from './icon/Location';
import Menu from './icon/Menu';
import { NavbarMenu } from './Navbar';

const navbarAuthMenu: NavbarMenu[] = [
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

const NavbarRight: NextPage = () => {
  return (
    <div className='flex items-center space-x-10'>
      <Link href={'/'}>
        <a className='hidden md:flex items-center space-x-2 hover:text-green-600'>
          <Location />
          <span className='block font-semibold tracking-tight'>Find a store</span>
        </a>
      </Link>
      <button className='relative md:hidden p-[6px] hover:bg-zinc-200 before:contents before:absolute before:inset-0 before:w-full before:h-full before:bg-gray-200 before:z-20 rounded-full'>
        <Menu />
      </button>
      <ul className='hidden md:flex items-center space-x-4'>
        {navbarAuthMenu.map((item) => (
          <li key={item.id}>
            <Link href={item.url}>
              <a
                className={`block py-1 px-4 border border-gray-800 ${
                  item.id === 2 ? 'bg-gray-800 text-white' : 'hover:bg-zinc-200'
                } font-semibold rounded-full tracking-normal`}
              >
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarRight;
