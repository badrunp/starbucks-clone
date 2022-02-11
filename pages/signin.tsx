import { NextPage } from 'next';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import { GuestButtonOutline } from '../components/GuestFooter';
import GuestLayout from '../components/GuestLayout';
import GuestLayoutForm, { GuestButton, GuestInput } from '../components/GuestLayoutForm';
import GuestLayoutTop from '../components/GuestLayoutTop';
import { FooterMenu } from '../interface/Footer';

const data: FooterMenu[] = [
  {
    id: 1,
    title: 'Forgot your username?',
    url: '#',
  },
  {
    id: 2,
    title: 'Forgot your password?',
    url: '#',
  },
];

export const LinkItem = ({ url, title }: { url: string; title: string }) => {
  return (
    <Link href={url}>
      <a className='inline-block text-green-600 underline font-semibold ml-1'>{title}</a>
    </Link>
  );
};

const Signin: NextPage = () => {
  const [dataInput, setDataInput] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setDataInput({
      ...dataInput,
      [name]: value,
    });
  };

  const handleClick = () => {
    console.log(dataInput);
  };

  return (
    <GuestLayout title='Sign In'>
      <GuestLayoutTop label='Sign in or create an account' info={false} />
      <GuestLayoutForm>
        <div className='flex flex-col space-y-6'>
          <GuestInput type='text' name='email' placeholder='Email address' handleChange={handleChangeInput} />
          <GuestInput
            type='password'
            name='password'
            placeholder='Password'
            handleChange={handleChangeInput}
          />
        </div>
        <div className='flex flex-col space-y-6'>
          <div className='flex items-start space-x-4'>
            <div className='flex-shrink-0'>
              <input type='checkbox' defaultChecked readOnly disabled className='cursor-pointer' />
            </div>
            <div className='flex flex-col space-y-4'>
              <p className='block text-sm tracking-wide'>
                Keep me signed in.
                <LinkItem title='Details' url='#' />
              </p>
            </div>
          </div>
          <div className='flex flex-col'>
            {data.map(({ id, title, url }: FooterMenu) => (
              <LinkItem key={id} title={title!} url={url} />
            ))}
          </div>
        </div>
        <GuestButton label='Sign in' handleClick={handleClick} />
      </GuestLayoutForm>
      <div className='mt-8 rounded-xl py-8 px-2 md:px-14 bg-[rgba(212,233,226,.33)] text-center flex items-center flex-col space-y-2'>
        <h2 className='hidden md:block font-semibold text-sm uppercase tracking-wider'>
          JOIN STARBUCKS® REWARDS
        </h2>
        <p className='block text-sm tracking-wide'>
          Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your
          phone, and more.
        </p>
        <GuestButtonOutline title='Join now' url='/signup' />
      </div>
    </GuestLayout>
  );
};

export default Signin;
