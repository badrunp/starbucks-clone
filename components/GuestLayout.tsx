import { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import GuestFooter from './GuestFooter';

const GuestLayout = ({ children, title }: { children: ReactNode; title: string }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar guest={true} />

      {children}

      <GuestFooter />
    </>
  );
};

export default GuestLayout;
