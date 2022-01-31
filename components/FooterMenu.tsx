import { TypeDataFooter1 } from '../interface/Footer';
import FooterMenuItem from './FooterMenuItem';

const FooterMenu = ({ data }: { data: TypeDataFooter1[] }) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-6 gap-6'>
      {data.map(({ id, label, dataChild }) => (
        <FooterMenuItem key={id} id={id} label={label} dataChild={dataChild} />
      ))}
    </div>
  );
};

export default FooterMenu;
