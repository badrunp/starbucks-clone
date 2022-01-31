const Overlay = ({ sidebarClose }: { sidebarClose: () => void }) => {
  return <div onClick={sidebarClose} className='fixed inset-0 z-10 bg-black bg-opacity-50'></div>;
};

export default Overlay;
