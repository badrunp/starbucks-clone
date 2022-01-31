import Link from 'next/link';
import { FooterMenu } from '../interface/Footer';

const FooterSocialMenuItem = ({ id, url, icon }: FooterMenu) => {
  return (
    <Link key={id} href={url}>
      <a className='block p-2 hover:bg-zinc-200 rounded-full'>{icon}</a>
    </Link>
  );
};

export default FooterSocialMenuItem;
