import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { TypeDataFooter1 } from '../interface/Footer';
import ArrowDown from './icon/ArrowDown';

const FooterMenuItem = ({
  id,
  label,
  dataChild,
  index,
  isActive,
  setIsActive,
}: TypeDataFooter1 & {
  index: number;
  isActive: boolean;
  setIsActive: (id: number) => void;
}) => {
  return (
    <div key={id} className='flex flex-col items-start overflow-y-hidden'>
      <button
        onClick={() => setIsActive(index)}
        className='cursor-pointer focus:outline-none lg:cursor-text font-semibold text-[19px] text-left flex items-center justify-between w-full mb-3'
      >
        <span>{label}</span>
        <ArrowDown className='block lg:hidden' />
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: 'max-content' }}
            exit={{ height: 0 }}
            transition={{ type: 'tween', duration: 0.2 }}
            className='space-y-2 md:space-y-3 relative'
          >
            {dataChild.map((child) => (
              <li key={child.id}>
                <Link href={child.url}>
                  <a className='block py-2 text-base tracking-wide text-gray-500'>{child.title}</a>
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FooterMenuItem;
