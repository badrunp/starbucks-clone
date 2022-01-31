import Link from 'next/link';
import { TypeDataFooter1 } from '../interface/Footer';
import ArrowDown from './icon/ArrowDown';

const FooterMenuItem = ({ id, label, dataChild }: TypeDataFooter1) => {
  return (
    <div key={id} className='flex flex-col items-start space-y-6'>
      <button className='cursor-pointer lg:cursor-text font-semibold text-[19px] text-left flex items-center justify-between w-full'>
        <span>{label}</span>
        <ArrowDown className='block lg:hidden' />
      </button>
      <ul className='space-y-2 md:space-y-3 relative'>
        {dataChild.map((child) => (
          <li key={child.id}>
            <Link href={child.url}>
              <a className='block py-2 text-base tracking-wide text-gray-500'>{child.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenuItem;
