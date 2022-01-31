import React from 'react';
import { FooterMenu } from '../interface/Footer';
import FooterSbMenuItem from './FooterSbMenuItem';

const FooterSbMenu = ({ data }: { data: FooterMenu[] }) => {
  return (
    <ul className='flex flex-col space-y-2 md:space-y-3 lg:space-y-0 lg:space-x-3 lg:items-center lg:flex-row lg:divide-x lg:divide-gray-700 lg:-ml-5 lg:py-3'>
      {data.map(({ id, title, url }) => (
        <FooterSbMenuItem key={id} id={id} title={title} url={url} />
      ))}
    </ul>
  );
};

export default FooterSbMenu;
