import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';

const GuestLayoutForm = ({ children }: { children: ReactNode }) => {
  return (
    <div className='w-full rounded-xl md:shadow-lg md:px-10 md:ring-2 md:ring-gray-100'>
      <div className='md:p-14 flex flex-col space-y-10'>{children}</div>
    </div>
  );
};

export const GuestInput = ({
  type,
  name,
  placeholder,
  handleChange,
  errors,
}: {
  type: string;
  name: string;
  placeholder: string;
  handleChange?: (input: React.ChangeEvent<HTMLInputElement>) => void;
  errors: any;
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [input, setInput] = useState('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange!(e);
    setInput(e.target.value);
  };

  const handleBlurInput = () => {
    if (input.length > 0) {
      setIsFocus(true);
    } else {
      setIsFocus(false);
    }
  };

  return (
    <div onFocus={() => setIsFocus(true)} onBlur={handleBlurInput} className='relative'>
      <input
        type={type}
        name={name}
        className='block w-full px-4 py-3 border border-gray-400 tracking-wide rounded-xl ring-2 ring-transparent focus:outline-none focus:border-transparent focus:ring-gray-600'
        onChange={handleChangeInput}
        autoComplete='off'
      />
      <motion.div
        initial={false}
        animate={{ y: isFocus ? -52 : -26, x: isFocus ? -10 : 0 }}
        transition={{ type: 'tween', duration: 0.2 }}
      >
        <span className='bg-white block tracking-wide absolute top-1/2 left-4 text-gray-800 font-semibold -translate-y-1/2 pointer-events-none  '>
          {placeholder}
        </span>
      </motion.div>
      {errors?.[name] !== undefined && (
        <span className='block text-red-500 text-sm tracking-wide'>{`${errors[name]
          .charAt(0)
          .toUpperCase()}${errors[name].slice(1).toLowerCase()}`}</span>
      )}
    </div>
  );
};

export const GuestButton = ({ label, handleClick }: { label: string; handleClick: () => void }) => {
  return (
    <div className='flex justify-end'>
      <button
        type='button'
        onClick={handleClick}
        className='block py-4 md:py-[18px] px-6 md:px-7 rounded-full bg-green-600 text-white font-semibold tracking-wide shadow-lg'
      >
        {label}
      </button>
    </div>
  );
};

export default GuestLayoutForm;
