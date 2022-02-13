import { NextPage } from 'next';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import { GuestButtonOutline } from '../components/GuestFooter';
import GuestLayout from '../components/GuestLayout';
import GuestLayoutForm, { GuestButton, GuestInput } from '../components/GuestLayoutForm';
import GuestLayoutTop from '../components/GuestLayoutTop';
import { data } from '../data/footer';
import regexMail from '../data/regexmail';
import { validateSignin } from '../data/validate';
import { FooterMenu } from '../interface/Footer';

export const LinkItem = ({ url, title }: { url: string; title: string }) => {
  return (
    <Link href={url}>
      <a className='inline-block text-green-600 underline font-semibold ml-1'>{title}</a>
    </Link>
  );
};

const Signin: NextPage = () => {
  const [dataInput, setDataInput] = useState<{ email: string; password: string } | any>({
    email: '',
    password: '',
  });
  const [inputError, setInputError] = useState<any>();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setDataInput({
      ...dataInput,
      [name]: value,
    });
  };

  const setError = (error: object) => {
    setInputError({ ...error });
  };
  const handleClick = () => {
    const objError: any = {};

    validateSignin.map((item) => {
      if (item.required) {
        if (dataInput[item.label] === '') {
          objError[item.label] = item.label + ' is required';
        } else if (item.min && item.min > 0) {
          if (dataInput[item.label].length < item.min) {
            objError[item.label] = item.label + ' min ' + item.min + ' character';
          } else {
            delete objError[item.label];
          }
        } else if (item.email) {
          if (!dataInput[item.label].toLowerCase().match(regexMail)) {
            objError[item.label] = item.label + ' is invalid!';
          } else {
            delete objError[item.label];
          }
        } else {
          delete objError[item.label];
        }
      }
    });

    setError(objError);
  };

  return (
    <GuestLayout title='Sign In'>
      <GuestLayoutTop label='Sign in or create an account' info={false} />
      <GuestLayoutForm>
        <div className='flex flex-col space-y-6'>
          <GuestInput
            type='text'
            name='email'
            placeholder='Email address'
            handleChange={handleChangeInput}
            errors={inputError}
          />
          <GuestInput
            type='password'
            name='password'
            placeholder='Password'
            handleChange={handleChangeInput}
            errors={inputError}
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
