import { ReactNode, useEffect } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import GuestFooter from './GuestFooter';

const GuestLayout = ({ children, title }: { children: ReactNode; title: string }) => {
  useEffect(() => {
    if (document.body.classList.contains('overflow-hidden')) {
      document.body.classList.remove('overflow-hidden');
    }
  }, []);
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar guest={true} />
      <div className='w-full min-h-screen overflow-hidden bg-white px-4 relative py-6 md:py-12'>
        <div className='flex flex-col max-w-[548px] lg:max-w-[580px] mx-auto sm:px-4'>{children}</div>
      </div>

      <GuestFooter />
    </div>
  );
};

export default GuestLayout;
