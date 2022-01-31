import { FooterMenu } from '../interface/Footer';
import FooterSocialMenuItem from './FooterSocialMenuItem';

const FooterSocialMenu = ({ data }: { data: FooterMenu[] }) => {
  return (
    <div className='flex items-center -ml-2'>
      {data.map(({ id, icon, url }) => (
        <FooterSocialMenuItem key={id} id={id} icon={icon} url={url} />
      ))}
    </div>
  );
};

export default FooterSocialMenu;
