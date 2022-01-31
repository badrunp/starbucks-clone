import Link from 'next/link';
import { Fragment } from 'react';
import ArrowDown from './icon/ArrowDown';
import { TypeMenu } from './Navbar';
import NavbarAuth from './NavbarAuth';
import NavbarFindLocation from './NavbarFindLocation';

const sidebarMenu: TypeMenu[] = [
  {
    id: 1,
    title: 'Menu',
    url: '',
    dataChild: [
      {
        id: 1,
        title: 'All Products',
        url: '/',
      },
      {
        id: 2,
        title: 'Featured',
        url: '/',
      },
      {
        id: 1,
        title: 'Previous Orders',
        url: '/',
      },
      {
        id: 1,
        title: 'Favorite Products',
        url: '/',
      },
    ],
  },
  {
    id: 2,
    title: 'Rewards',
    url: '/',
  },
  {
    id: 3,
    title: 'Gift Cards',
    url: '/',
  },
];

const Sidebar = () => {
  return (
    <div className='fixed right-0 top-0 pt-[72px] md:pt-[83px] lg:pt-[101px] w-4/5 h-full z-20 bg-white'>
      <div className='py-8 relative'>
        <div className='flex flex-col'>
          {sidebarMenu.map((item) =>
            item.url !== '' ? (
              <Link key={item.id} href={item.url}>
                <a className='py-4 px-8 text-[19px] tracking-normal font-semibold'>
                  <span>{item.title}</span>
                </a>
              </Link>
            ) : (
              <Fragment key={item.id}>
                <button className='py-4 px-8 text-[19px] tracking-normal font-semibold flex items-center justify-between'>
                  <span>{item.title}</span>
                  {item.url === '' && <ArrowDown className='-rotate-90' />}
                </button>

                <div className='absolute inset-0 flex flex-col bg-white'>
                  <div className='flex justify-between items-center py-4 px-8 bg-gray-100'>
                    <ArrowDown className='rotate-90' />
                    <p className='text-[19px] tracking-normal font-semibold'>Menu</p>
                    <div />
                  </div>
                  {item?.dataChild?.map((child) => (
                    <Link key={child.id} href={child.url}>
                      <a className='py-4 px-8 text-[19px] tracking-normal font-semibold'>
                        <span>{child.title}</span>
                      </a>
                    </Link>
                  ))}
                </div>
              </Fragment>
            )
          )}
        </div>
        <div className='mx-8 mt-4 mb-8 border-t-2 h-0' />
        <div className='px-6 flex flex-col space-y-3'>
          <NavbarAuth className='flex' />
          <NavbarFindLocation className='flex' />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
