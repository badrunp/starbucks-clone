import Link from 'next/link';
import { navbarMenu } from '../data/navbar';
import Starbucks from './Starbucks';

const NavbarLeft = ({ guest }: { guest: boolean }) => {
  return (
    <div className='flex items-center space-x-4 lg:space-x-8 h-full'>
      <Link href={'/'}>
        <a>
          <Starbucks />
        </a>
      </Link>
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
