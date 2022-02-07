import Link from 'next/link';
import { TypeMenu } from './Navbar';
import Starbucks from './Starbucks';

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

const NavbarLeft = ({ guest }: { guest: boolean }) => {
  return (
    <div className='flex items-center space-x-4 lg:space-x-8 h-full'>
      <Starbucks />
      <ul className='hidden md:flex items-center justify-center h-full'>
        {!guest &&
          navbarMenu.map((item) => (
            <li key={item.id} className='h-full'>
              <Link href={item.url}>
                <a className='text-base font-bold tracking-normal uppercase px-3 h-full flex items-center hover:text-green-600'>
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NavbarLeft;
