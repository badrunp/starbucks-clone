import { NextPage } from 'next';

const Menu: NextPage = () => {
  return (
    <svg
      viewBox='0 0 24 24'
      className='valign-middle absoluteCenter'
      preserveAspectRatio='xMidYMid meet'
      aria-hidden='true'
      focusable='false'
      style={{ width: '24px', height: '24px', overflow: 'visible', fill: 'currentcolor' }}
    >
      <path
        className='sb-hamburgerButton-middleLine-CLOSED sb-hamburgerButton-animation'
        d='M21,12.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,12.9,21,12.9z'
      ></path>
      <path
        className='sb-hamburgerButton-topLine-CLOSED sb-hamburgerButton-animation sb-hamburgerButton-animation-outer-lines'
        d='M21,6.9H3C2.5,6.9,2.1,6.5,2.1,6S2.5,5.1,3,5.1h18c0.5,0,0.9,0.4,0.9,0.9S21.5,6.9,21,6.9z'
      ></path>
      <path
        className='sb-hamburgerButton-bottomLine-CLOSED sb-hamburgerButton-animation sb-hamburgerButton-animation-outer-lines'
        d='M21,18.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,18.9,21,18.9z'
      ></path>
      <circle className='sb-icon-hover' fill='transparent' cx='50%' cy='50%' r='75%'></circle>
    </svg>
  );
};

export default Menu;
