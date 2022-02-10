import { useEffect, useState } from 'react';
import Resize from '../hooks/Resize';
import { TypeDataFooter1 } from '../interface/Footer';
import FooterMenuItem from './FooterMenuItem';

const FooterMenu = ({ data }: { data: TypeDataFooter1[] }) => {
  const [isActive, setIsActive] = useState<boolean[]>(Array(5).fill(false));
  const { width } = Resize();

  const setIsActiveHandle = (index: number) => {
    const newActive = isActive.map((indexNum, i): boolean => {
      if (i === index) {
        if (isActive[index] === true) {
          return false;
        } else {
          return true;
        }
      }
      return indexNum;
    });
    setIsActive(newActive);
  };

  useEffect(() => {
    if (width >= 1023) {
      setIsActive(Array(5).fill(true));
    } else {
      setIsActive(Array(5).fill(false));
    }
  }, [width]);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-3'>
      {data.map(({ id, label, dataChild }, index) => (
        <FooterMenuItem
          key={id}
          id={id}
          index={index}
          label={label}
          dataChild={dataChild}
          isActive={isActive[index]}
          setIsActive={setIsActiveHandle}
        />
      ))}
    </div>
  );
};

export default FooterMenu;
