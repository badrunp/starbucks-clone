import { dataFooter, dataFooter2, dataSocial } from '../data/footer';
import FooterMenu from './FooterMenu';
import FooterSbMenu from './FooterSbMenu';
import FooterSocialMenu from './FooterSocialMenu';

const Footer = () => {
  return (
    <div className='px-4 md:px-6 lg:px-[40px] py-6'>
      <FooterMenu data={dataFooter} />
      <div className='my-8 border-t-2' />

      <div className='space-y-4'>
        <FooterSocialMenu data={dataSocial} />
        <FooterSbMenu data={dataFooter2} />
        <p className='block text-left text-gray-500 tracking-normal text-sm'>
          © 2022 Starbucks Coffee Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
