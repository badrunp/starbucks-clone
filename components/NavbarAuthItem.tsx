import Link from 'next/link';
import { TypeMenu } from './Navbar';

const NavbarAuthItem = ({ id, title, url }: TypeMenu) => {
  return (
    <li key={id}>
      <Link href={url}>
        <a
          className={`block py-1 px-4 border border-gray-800 ${
            id === 2 ? 'bg-gray-800 text-white' : 'hover:bg-zinc-200'
          } font-semibold rounded-full tracking-normal`}
        >
          {title}
        </a>
      </Link>
    </li>
  );
};

export default NavbarAuthItem;
