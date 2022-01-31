import Link from 'next/link';
import { FooterMenu } from '../interface/Footer';

const FooterSbMenuItem = ({ id, url, title }: FooterMenu) => {
  return (
    <li key={id}>
      <Link href={url}>
        <a className='block font-semibold py-2 lg:py-0 text-left lg:pl-5 lg:pr-3 tracking-normal'>{title}</a>
      </Link>
    </li>
  );
};

export default FooterSbMenuItem;
