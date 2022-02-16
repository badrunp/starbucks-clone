import Link from 'next/link';
import { Fragment, useState } from 'react';
import ArrowDown from './icon/ArrowDown';
import NavbarAuth from './NavbarAuth';
import NavbarFindLocation from './NavbarFindLocation';
import { AnimatePresence, motion } from 'framer-motion';
import { sidebarMenu } from '../data/sidebar';

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <motion.div
      initial={{ x: '100vw' }}
      animate={{ x: '0' }}
      exit={{ x: '100vw' }}
      transition={{ type: 'tween' }}
      className='fixed right-0 top-0 pt-[72px] md:pt-[83px] lg:pt-[101px] w-4/5 h-full z-20 bg-white'
    >
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
                <button
                  onClick={() => setIsActive(true)}
                  className='py-4 px-8 text-[19px] focus:outline-none tracking-normal font-semibold flex items-center justify-between'
                >
                  <span>{item.title}</span>
                  {item.url === '' && <ArrowDown className='-rotate-90' />}
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ x: '100vw' }}
                      animate={{ x: '0' }}
                      exit={{ x: '100vw' }}
                      transition={{ type: 'tween' }}
                      className='absolute inset-0 flex flex-col bg-white'
                    >
                      <button
                        type='button'
                        onClick={() => setIsActive(false)}
                        className='flex justify-between items-center py-4 px-8 bg-gray-100 focus:outline-none'
                      >
                        <ArrowDown className='rotate-90' />
                        <p className='text-[19px] tracking-normal font-semibold'>Menu</p>
                        <div />
                      </button>
                      {item?.dataChild?.map((child) => (
                        <Link key={child.id} href={child.url}>
                          <a className='py-4 px-8 text-[19px] tracking-normal font-semibold'>
                            <span>{child.title}</span>
                          </a>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
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
    </motion.div>
  );
};

export default Sidebar;
