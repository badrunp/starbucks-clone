import React, { ReactNode } from 'react';

const GuestLayoutForm = ({ children }: { children: ReactNode }) => {
  return (
    <div className='w-full rounded-xl md:shadow-lg md:px-10 md:ring-2 md:ring-gray-100'>
      <div className='md:p-14 flex flex-col space-y-10'>{children}</div>
    </div>
  );
};

export const GuestInput = ({ type, placeholder }: { type: string; placeholder: string }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className='block w-full px-4 py-3 border border-gray-400 tracking-wide rounded-xl ring-2 ring-transparent focus:outline-none focus:border-transparent focus:ring-gray-600'
    />
  );
};

export const GuestButton = ({ label }: { label: string }) => {
  return (
    <div className='flex justify-end'>
      <button className='block py-4 md:py-[18px] px-6 md:px-7 rounded-full bg-green-600 text-white font-semibold tracking-wide shadow-lg'>
        {label}
      </button>
    </div>
  );
};

export default GuestLayoutForm;
