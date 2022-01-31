import { ReactNode, useState } from 'react';
import Navbar from './Navbar';
import Head from 'next/head';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Overlay from './Overlay';

const Layout = ({ children, title }: { children: ReactNode; title: string }) => {
  const [sidebarActive, setSidebarActive] = useState(false);

  // const sidebarOpen = () => {
  //   setSidebarActive(true);
  // };

  const sidebarClose = () => {
    setSidebarActive(false);
    document.body.classList.remove('overflow-hidden');
  };

  const sidebarToggle = () => {
    setSidebarActive(!sidebarActive);
    !sidebarActive
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden');
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar sidebarToggle={sidebarToggle} />
      {sidebarActive && (
        <>
          <Overlay sidebarClose={sidebarClose} />
          <Sidebar />
        </>
      )}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
