import { motion } from 'framer-motion';

const Overlay = ({ sidebarClose }: { sidebarClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={sidebarClose}
      className='fixed inset-0 z-10 bg-black bg-opacity-50'
    ></motion.div>
  );
};

export default Overlay;
