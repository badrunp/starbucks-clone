import { useEffect, useState } from 'react';

const Resize = () => {
  const [{ width, height }, setResize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setResize({
      width: window?.innerWidth,
      height: window?.innerHeight,
    });
  };

  useEffect(() => {
    setResize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    height,
  };
};

export default Resize;
