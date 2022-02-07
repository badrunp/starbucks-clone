import Link from 'next/link';
import { FooterMenu } from '../interface/Footer';
const menu: FooterMenu[] = [
  {
    id: 1,
    title: 'Web Accessiblity',
    url: '/',
  },
  {
    id: 2,
    title: 'Private Policy',
    url: '/',
  },
  {
    id: 3,
    title: 'Term of Use',
    url: '/',
  },
  {
    id: 4,
    title: 'Cookie Preperences',
    url: '/',
  },
];

const GuestFooterMenuItem = ({ title, url }: { title: string; url: string }) => {
  return (
    <li>
      <Link href={url}>
        <a className='block font-semibold pb-2 tracking-normal text-sm md:text-base'>{title}</a>
      </Link>
    </li>
  );
};

const GuestFooterMenu = () => {
  return (
    <ul className='flex flex-col items-start justify-start grow sm:pl-8 md:pl-16'>
      {menu.map(({ id, title, url }: FooterMenu) => (
        <GuestFooterMenuItem key={id} title={title!} url={url} />
      ))}
    </ul>
  );
};

const GuestFooter = () => {
  return (
    <div className='bg-white border-t w-full relative h-[314px] px-4 overflow-hidden'>
      <div className='w-[404px] mx-auto flex flex-col mt-10'>
        <div className='flex flex-col space-y-4 sm:space-y-0 sm:flex-row items-start justify-between'>
          <Link href={'/'}>
            <a className='block py-1 px-4 border border-green-800 rounded-full font-semibold tracking-wide text-lg text-green-700'>
              Find a store
            </a>
          </Link>
          <GuestFooterMenu />
        </div>
        <p className='block font-semibold mt-8 tracking-normal text-sm md:text-base'>
          &copy; {new Date().getFullYear()} Starbucks
        </p>
      </div>
    </div>
  );
};

export default GuestFooter;
